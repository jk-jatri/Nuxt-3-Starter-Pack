<template>
  <div>
    <h1>Common Page with <span class="text-blue-500">common</span> layout</h1>
    <FormWow />
    <TableWow />
    <SplitButton label="Proceed" :model="items" class="p-button-raised p-button-rounded"></SplitButton>
    <Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise" :step="50" :min="0" :max="500"/>
    <div class="flex md:gap-x-5 px-5">
      <Card
        :imgSrc="'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'"
        :title="'hello'"
        :description="'Card description will goes here'"
        :btnName="'first button'"
      />
      <Card
        imgSrc="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        :title="'hello2'"
        :description="'Card description will goes here2'"
        :btnName="'second button'"
      />
      <Card
        imgSrc="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        :title="'hello3'"
        :description="'Card description will goes here3'"
        :btnName="'third button'"
      />
    </div>
    <NuxtLink to="/about-new" class="border bg-gray-200 px-4 py-1 text-red-600"
      >go somewhere</NuxtLink
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      items: [
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: () => {
            this.$toast.add({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
        {
          label: "Vue Website",
          icon: "pi pi-external-link",
          command: () => {
            window.location.href = "https://vuejs.org/";
          },
        },
        {
          label: "Upload",
          icon: "pi pi-upload",
          to: "/fileupload",
        },
      ],
    };
  },
};
</script>
