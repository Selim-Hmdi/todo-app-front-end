<template>
    <div class="modal">
        <slot></slot>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
/* Dimensions are left up to parent component by using class */

.modal {
    position: fixed;
    background-color: rgb(105, 105, 105);
    color: white;
    z-index: 10;
}
</style>