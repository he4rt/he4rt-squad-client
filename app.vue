<template>
  <div>
    <MaterialCardActivity
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      username="Lorem ipsum"
      color="done"
      :time="3"
      :star-amount="5"
    ></MaterialCardActivity>
    <MaterialCardActivity
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      username="Lorem ipsum"
      color="doing"
      :time="3"
      :star-amount="5"
    ></MaterialCardActivity>
    <MaterialCardActivity
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      username="Lorem ipsum"
      color="unavailable"
      :time="3"
    ></MaterialCardActivity>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
