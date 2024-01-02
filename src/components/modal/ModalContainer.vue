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
    background-color: var(--modal-bg);
    z-index: 10;
}
</style>