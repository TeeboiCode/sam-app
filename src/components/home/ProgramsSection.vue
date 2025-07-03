<template>
  <section class="program-section section">
    <div class="container">
      <!-- Header Div - with program title and explore button -->
      <div class="program-header">
        <div class="program-header-left">
          <h1 class="section-title text-center">Our Programs</h1>
          <h2 class="section-subtitle text-center">
            Explore our educational programs
          </h2>
          <p class="section-description text-center mb-5">
            Comprehensive learning pathways designed to help students excel
          </p>
        </div>
      </div>

      <!-- Cards Container Div -->

      <div class="program-cards justify-content-center align-items-center">
        <!-- Program Card 1 -->

        <div class="row g-4">
          <div
            class="col-12 col-md-4"
            v-for="card in cardContents"
            :key="card.id"
          >
            <BaseCard05 :card="card"></BaseCard05>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseCard05 from "../ui/BaseCard05.vue";
import JAMBImg from "../../assets/styles/images/jamb-image.jpg";
import WAECImg from "../../assets/styles/images/lectural-1.jpg";
import NECOImg from "../../assets/styles/images/School.jpg";
import GCEImg from "../../assets/download (1).jpg";
import ExtraImg from "../../assets/24da4d8693262e877734246dbba19349.jpg";
import PGImg from "../../assets/African students computer stock image_ Image of cheerful - 29039485.jpg";
export default {
  name: "Program",
  components: {
    BaseCard05,
  },
  data() {
    return {
      cardContents: [
        {
          id: 1,
          title: "WAEC Tutorial",
          subjects: "9 Subjects",
          duration: "6 Weeks",
          brand: "TutorPro",
          logo: "../assets/images/Logo-full.png",
          imageClass: WAECImg,
          tag: "WAEC",
          rating: "4.5",
        },
        {
          id: 2,
          title: "JAMB Tutorial",
          subjects: "4 Subjects",
          duration: "6 Weeks",
          brand: "TutorPro",
          logo: "../assets/images/Logo-full.png",
          imageClass: JAMBImg,
          tag: "JAMB",
          rating: "4.5",
        },
        {
          id: 3,
          title: "NECO Tutorial",
          subjects: "9 Subjects",
          duration: "6 Weeks",
          brand: "TutorPro",
          logo: "../assets/images/Logo-full.png",
          imageClass: NECOImg,
          tag: "NECO",
          rating: "4.5",
        },
        {
          id: 4,
          title: "Extra Lesson",
          subjects: "3 Subjects",
          duration: "6 Weeks",
          brand: "TutorPro",
          logo: "../assets/images/Logo-full.png",
          imageClass: ExtraImg,
          tag: "Lesson",
          rating: "4.5",
        },
        {
          id: 5,
          title: "GCE Tutorial",
          subjects: "9 Subjects",
          duration: "6 Weeks",
          brand: "TutorPro",
          logo: "../assets/images/Logo-full.png",
          imageClass: GCEImg,
          tag: "GCE",
          rating: "4.5",
        },

        {
          id: 6,
          title: "POST-UTME Tutorial",
          subjects: "3 Subjects",
          duration: "6 Weeks",
          brand: "TutorPro",
          logo: "../assets/images/Logo-full.png",
          imageClass: PGImg,
          tag: "POST-UTME",
          rating: "4.5",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* .waec-bg {
  background: linear-gradient(rgba(107, 70, 193, 0.2), rgba(85, 60, 154, 0.3)),
    url("@/assets/lectural 1.jpg") center/cover no-repeat;
}

.neco-bg {
  background: linear-gradient(rgba(107, 70, 193, 0.2), rgba(85, 60, 154, 0.3)),
    url("@/assets/Florida Virtual School Incorporates Face-to-Face….jpg")
      center/cover no-repeat;
}

.gce-bg {
  background: linear-gradient(rgba(107, 70, 193, 0.2), rgba(85, 60, 154, 0.3)),
    url("@/assets/download (1).jpg") center/cover no-repeat;
}

.pg-bg {
  background: linear-gradient(rgba(107, 70, 193, 0.2), rgba(85, 60, 154, 0.3)),
    url("@/assets/African students computer stock image_ Image of cheerful - 29039485.jpg")
      center/cover no-repeat;
}

.ex-bg {
  background: linear-gradient(rgba(107, 70, 193, 0.2), rgba(85, 60, 154, 0.3)),
    url("@/assets/24da4d8693262e877734246dbba19349.jpg") center/cover no-repeat;
} */

/* Responsive Styles */
@media (max-width: 992px) {
  .program-header {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .program-header-right {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
}
</style>
