<script setup>
import {
  CalendarOutlined,
  SearchOutlined,
  SmileOutlined,
  MessageOutlined,
  BellOutlined,
} from "@ant-design/icons-vue";
import uz from "@/assets/images/uz.png";
import ru from "@/assets/images/ru.png";
import { ref } from "vue";

const options = ref([
  {
    value: "uz",
    label: "UZ",
    img: uz,
  },
  {
    value: "ru",
    label: "RU",
    img: ru,
  },
]);

const value_language = ref({
  value: "uz",
  label: "UZ",
  img: uz,
});

const handleChange = (val) => {
  console.log(val);
  value_language.value = val;
};
</script>
<template >
  <div class="header-content">
    <div class="header-content-items">
      <div class="search-bar">
        <input type="text" placeholder="Izlash" />
        <div class="search-btn">
          <SearchOutlined />
        </div>
      </div>
      <div class="language">
        <div class="select-language">
          <a-dropdown :arrow="{ pointAtCenter: true }">
            <a-button class="dropdown-btn">
              <img :src="value_language.img" alt="" class="language_img" />
              {{ value_language.label }}
            </a-button>
            <template #overlay>
              <a-menu>
                <a-menu-item
                  @click="handleChange(option)"
                  v-for="option in options"
                  :key="option.value"
                >
                  <img :src="option.img" alt="" />
                  {{ option.label }}
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
      <div class="notifications">
        <span class="notifications-item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM20 11H4V19H20V11ZM15 5H9V7H7V5H4V9H20V5H17V7H15V5ZM6 13H8V15H6V13ZM11 13H13V15H11V13ZM16 13H18V15H16V13Z"
              fill="white"
            />
          </svg>
        </span>
        <span class="notifications-item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_115)">
              <path
                d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_115">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span class="notifications-item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <div class="avatar">
        <img src="@/assets/images/avatar.png" alt="" width="48" height="48" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-content {
  width: 100%;
  height: 80px;
  padding: 16px 43px;
  background: var(--primary);
  box-shadow: var(--box-primary-shadow);
  border-radius: var(--b-radius);
  display: flex;
  justify-content: end;
}
.header-content-items {
  display: flex;
  align-items: center;
}
.language {
  margin-left: 19px;
}

.dropdown-btn {
  background: transparent;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
}
.dropdown-btn:hover {
  color: #fff;
}
.select-language {
  display: flex;
  align-items: center;
}
.notifications {
  margin-left: 43px;
  display: flex;
  gap: 20px;
}
.notifications-item {
  position: relative;
  cursor: pointer;
}
.notifications-item::after {
  width: 12px;
  height: 12px;
  background: #fc6f6f;
  content: "";
  position: absolute;
  top: -2px;
  right: -2px;
  border-radius: 50%;
}
.avatar {
  margin-left: 65px;
  border-radius: 50%;
  overflow: hidden;
}
.search-bar {
  display: flex;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  padding: 0;
}
.search-bar input {
  background: transparent;
  outline: none;
  border: none;
  padding: 5px 12px;
  width: 80px;
  font-size: 12px;
}
.search-btn {
  background: var(--primary-light);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* margin-right: -1px ; */
}
</style>