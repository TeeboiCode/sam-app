<template>
  <div class="mt-3">
    <h2>🚀 Project Setup Instructions</h2>
    <ul>
      <li>
        Clone the project using the repository URL:
        <strong><code>git clone &lt;repository-url&gt;</code></strong>
      </li>

      <li>
        Navigate into the project folder:
        <strong><code>cd &lt;project-name&gt;</code></strong>
      </li>

      <li>
        Install the project dependencies using:
        <strong><code>npm install</code></strong>
      </li>

      <li>
        Run the development server to make sure everything is working:
        <strong><code>npm run dev</code></strong>
      </li>

      <li>
        If it runs successfully, create a new branch for your task:
        <strong><code>git checkout -b &lt;branch-name&gt;</code></strong>
      </li>

      <li>
        After making changes, check the status of your files:
        <strong><code>git status</code></strong>
      </li>

      <li>
        Stage the files you want to commit:
        <strong><code>git add .</code></strong>
      </li>

      <li>
        Commit your changes with a clear message:
        <strong><code>git commit -m "your commit message"</code></strong>
      </li>

      <li>
        Push your branch to the remote repository:
        <strong><code>git push origin &lt;branch-name&gt;</code></strong>
      </li>
    </ul>

    <h3>📌 Notes:</h3>
    <ul>
      <li>
        In the project, you will see different buttons. Buttons with the same
        color mean another developer is also working on that section or related
        file.
      </li>
      <li>
        All the files you're expected to work on are located in:
        <strong><code>src/components/TaskFolder/</code></strong>
      </li>
      <li>
        Each task file starts with the word <strong>Task</strong> (e.g.,
        <code>TaskOne.vue</code>, <code>TaskForm.vue</code>)
      </li>
      <li>
        To see the color codes, font styles, and other styling details, check
        the
        <strong><code>style.css</code></strong> file located just below
        <strong><code>main.js</code></strong> in the project structure
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
