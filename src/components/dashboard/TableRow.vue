<template>
  <tr class="courier-pointer">
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div class="flex items-center">
        <router-link :to="{path:`/emp/${id}`}">
          <div class="  flex  justify-center items-center">
            <div>

              <img
                class="w-10 h-10  rounded-full"
                :src="avatar"
                alt=""
              />
            </div>
            <div class="ml-3">
              <p class="text-gray-900 whitespace-no-wrap">
                {{name}}
              </p>
            </div>
          </div>
        </router-link>
      </div>

    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p class="text-gray-900 whitespace-no-wrap">{{country}}</p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p class="text-gray-900 whitespace-no-wrap">
        {{email}}
      </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p class="text-gray-900 whitespace-no-wrap">
        {{phone}}
      </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
        ></span>
        <span class="relative">Activo</span>
      </span>
    </td>
  </tr>
</template>

<script >
import { computed, defineComponent } from "vue-demi";
import { useStore } from "../../store/store";
export default defineComponent({
  props: ["avatar", "email", "name", "country", "phone", "id"],
  setup(props) {
    // setup() receives props as the first argument.
    return {
      id: computed(() => props.id),
      avatar: computed(() => props.avatar),
      email: computed(() => props.email),
      name: computed(() => props.name),
      country: computed(() => props.country),
      phone: computed(() => props.phone),
    };
  },
});
</script>

<style>
</style>