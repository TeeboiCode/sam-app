<template>
  <div class="task p-0 mt-0" style="padding-block: 0 !important">
    <div class="bg-white py-4 col-lg-8 w-100 p-2 tasko">
      <form class="row g-3 px-4">
        <h2>Personal Info</h2>
        <div class="col-lg-6 col-md-12">
          <label for="inputEmail4" class="form-label">First Name</label>
          <input
            type="firstName"
            class="form-control"
            :value="user.firstName"
            disabled
            id="firstName"
          />
        </div>
        <div class="col-lg-6 col-md-12">
          <label for="lastName" class="form-label">Last Name</label>
          <input
            type="lastName"
            class="form-control"
            id="lastName"
            disabled
            :value="user.lastName"
          />
        </div>
        <div class="col-lg-6 col-md-12">
          <label for="inputPassword4" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            disabled
            :value="user.email"
          />
        </div>

        <div class="col-lg-6 col-md-12">
          <label for="mobile" class="form-label">Mobile</label>
          <input
            type="mobile"
            class="form-control"
            id="mobile"
            disabled
            :value="user.phone"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            disabled
            :value="user.address"
            style="height: 3.5rem"
          />
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

    <!-- <div class="bg-light py-5 col-lg-8 m-auto p-3 tas">
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
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useUsersStore } from "../../stores/users";

const userStore = useUsersStore();
const authorBio = ref("");

const user = computed(() => {
  return userStore.users;
});

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
}

.form-control {
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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.author-bio-editor textarea {
  width: 100%;
}

@media (max-width: 768px) {
}
</style>
