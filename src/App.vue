<template>
  <div>
    <div class="flex justify-center p-10 bg-grey">
      <div class="w-[334px] h-[334px] rounded-lg box bg-white relative">
        <img
          src="@/assets/img/rectangle-card.svg"
          alt=""
          class="object-cover w-full h-full"
        />
        <div class="absolute flex gap-7 top-[73px] left-2 items-center">
          <p class="mb-0 text-base font-semibold">Ve</p>
          <span class="text-xs">10</span>
        </div>
        <p class="absolute text-xs font-normal top-14 left-20">9</p>
        <div
          class="absolute top-2 left-[120px] flex flex-col gap-y-10 items-center"
        >
          <span class="pl-1 font-semibold text-red">AS</span>
          <span class="text-base font-semibold">Ke Jp Su Me</span>
          <span class="relative text-xs font-normal">
            8 <span class="absolute left-0 top-10">2</span></span
          >
        </div>
        <span class="absolute text-xs top-14 right-20">7</span>
        <span class="absolute text-xs top-[73px] right-16">6</span>
        <div class="absolute top-[158px] left-[140px]">
          <div class="relative flex text-xs gap-7">
            <span>11</span>
            <span>5</span>

            <span class="text-base font-semibold pl-7">Ra <sub class="font-normal text-[9px]">R</sub></span>
          </div>
        </div>
        <div class="absolute flex items-center gap-6 text-xs bottom-16 left-2">
          <span class="flex flex-col text-base font-semibold">
            <span>Ma</span>
            <span>Sa↑</span>
          </span>
          <span>12</span>
          <span class="pl-16 text-base font-semibold">MO</span>
          <span class="pl-16">4</span>
        </div>
        <div class="absolute text-xs bottom-16 left-[75px] ">
          <span>1</span>
          <span class="pl-[165px]">3</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="css">
.box {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
}
</style>
