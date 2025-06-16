<template>
  <div class="task p-2">
    <div class="bg-light py-5 col-lg-8 m-auto p-2 tasko">
      <form class="row g-3">
        <h2>Personal Info</h2>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">First Name</label>
          <input
            type="firstName"
            class="form-control"
            id="firstName"
            placeholder="Enter First Name"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="info@example.com"
          />
        </div>
        <div class="col-md-6">
          <label for="lastName" class="form-label">Last Name</label>
          <input
            type="lastName"
            class="form-control"
            id="lastName"
            placeholder="Enter Last Name"
          />
        </div>
        <div class="col-md-6">
          <label for="mobile" class="form-label">Mobile</label>
          <input
            type="mobile"
            class="form-control"
            id="mobile"
            placeholder="Enter Mobile No"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Enter your Address"
            style="height: 3.5rem"
          />
        </div>
        <div class="col-md-4">
          <label for="inputCountry" class="form-label">Country</label>
          <select id="inputCountry" class="form-select">
            <option selected>United states</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">City</label>
          <select id="inputCity" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>

        <!-- TinyMCE Editor -->
        <div class="author-bio-editor">
          <label for="authorBio" class="form-label">Author Bio</label>
          <textarea id="authorBio" v-model="authorBio"></textarea>
        </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck"
              >Update Password:</label
            >
          </div>
        </div>
        <!-- <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div> -->
      </form>
    </div>

    <div class="bg-light py-5 col-lg-8 m-auto p-3 tas">
      <h2>Social Profile</h2>
      <hr />
      <div style="grid-template-columns: 1fr 1fr" class="d-grid gap-2">
        <div class="col-md-10 pt-2">
          <p>Facebook Url</p>
          <div class="d-flex gap-3 align-baseline">
            <i class="bi bi-facebook fs-2"></i>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Facebook.com"
            />
          </div>
        </div>
        <div class="col-md-10 pt-2">
          <p>Twitter Url</p>
          <div class="d-flex gap-3 align-baseline">
            <i class="bi bi-twitter-x fs-2"></i>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Twitter.com"
            />
          </div>
        </div>
        <div class="col-md-10 pt-3">
          <p>Youtube Url</p>
          <div class="d-flex gap-3 align-baseline">
            <i class="bi bi-youtube fs-2"></i>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Youtube.com"
            />
          </div>
        </div>
        <div class="col-md-10 pt-3">
          <p>Linkdeln Url</p>
          <div class="d-flex gap-3 align-baseline">
            <i class="bi bi-linkedin fs-2"></i>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Linkdeln.com"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const authorBio = ref("");

const loadTinyMCE = () => {
  if (window.tinymce) {
    initEditor();
  } else {
    const script = document.createElement("script");
    script.src = "https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js";
    script.referrerPolicy = "origin";
    script.onload = initEditor;
    document.head.appendChild(script);
  }
};

const initEditor = () => {
  tinymce.init({
    selector: "#authorBio",
    height: 300,
    menubar: true,
    plugins: [
      "advlist autolink lists link image charmap preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table help wordcount",
    ],
    toolbar:
      "undo redo | formatselect | bold italic backcolor | " +
      "alignleft aligncenter alignright alignjustify | " +
      "bullist numlist outdent indent | removeformat | help",
    setup(editor) {
      editor.on("Change KeyUp", () => {
        authorBio.value = editor.getContent();
      });
    },
    init_instance_callback(editor) {
      editor.setContent(authorBio.value);
    },
  });
};

onMounted(() => {
  loadTinyMCE();
});

onBeforeUnmount(() => {
  const editor = tinymce.get("authorBio");
  if (editor) editor.destroy();
});

const handleSubmit = () => {
  console.log("Submitted:", {
    authorBio: authorBio.value,
  });
};
</script>

<style scoped>
.task {
  background-color: #f0f7ff;
  padding-block: 5rem !important;
}

.form-control{
  color: #212529 var(--bs-body-color) !important;
}

.form-check {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  gap: 2.2rem;
}

.tas {
  margin-top: 4rem !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
}

.tasko {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
}

.author-bio-editor textarea {
  width: 100%;
}

@media (max-width: 768px) {
}
</style>
