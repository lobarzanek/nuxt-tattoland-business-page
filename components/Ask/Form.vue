<script setup>
const name = ref("");
const mail = ref("");

const handleSubmit = () => {
  console.log(name.value, mail.value);
};
</script>

<template>
  <div>
    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col items-center gap-10 mx-4"
    >
      <div class="flex justify-between flex-wrap gap-5 w-full">
        <div class="form-control w-full min-w-72">
          <div class="label">
            <span class="label-text">Imię</span>
          </div>
          <input
            type="text"
            class="input input-bordered"
            :value="name"
            @input="(event) => (name = event.target.value)"
          />
        </div>
        <div class="form-control w-full min-w-72">
          <div class="label">
            <span class="label-text">E-mail</span>
          </div>
          <input
            type="text"
            class="input input-bordered"
            :value="mail"
            @input="(event) => (mail = event.target.value)"
          />
        </div>
      </div>
      <textarea
        class="textarea textarea-bordered w-full"
        placeholder="Zapisz tutaj swoje pytanie! :)"
      ></textarea>
      <button class="btn btn-outline w-full">Wyślij</button>
    </form>
  </div>
</template>
