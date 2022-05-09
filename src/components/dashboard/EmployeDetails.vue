<template>
  <div class="flex flex-col items-center">
    <div>
      <img
        :src="selectedEmployee.avatar"
        :alt="selectedEmployee.name"
        class="h-52 w-52 rounded-full object-cover object-center "
      >
    </div>
    <div>{{selectedEmployee.name}}</div>
    <div class="w-1/2">
      <div
        v-for="checkin in employeeCheckin"
        :key="checkin.id"
        class="space-y-9 flex-col border-2 my-2 "
      >
        <div class="my-4 px-2  ">
          <div class="text-xs py-2">
            {{checkin.checkin}}- {{checkin.location}}
          </div>
          <div class="text-sm">{{checkin.purpose}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { defineComponent, onMounted } from "vue-demi";
import { useRoute } from "vue-router";
import { useStore } from "../../store/store";
export default defineComponent({
  props: ["id"],
  setup(props) {
    console.log(props);
    const store = useStore();
    const { selectedEmployee, employeeCheckin } = storeToRefs(store);
    const router = useRoute();
    console.log(router);
    onMounted(() => {
      store.selectEmployee(router.params.id);
      store.getEmployeeCheckingData(router.params.id);
    });

    return {
      selectedEmployee,
      employeeCheckin,
    };
  },
});
</script>

<style>
</style>