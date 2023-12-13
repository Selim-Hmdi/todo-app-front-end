<template>
    <ModalContainer class="modal-position">
        <div class="modal-content">
            <section class="header">
                <h2 class="modal-title">Edit your item</h2>
                <div class="close-modal" @click="closeModal">X</div>
            </section>
            <section class="modal-input-section">
                <input type="text" v-model="todoInput">
                <button @click="editTodo">Validate</button>
            </section>
        </div>
    </ModalContainer>
</template>
<script>
import ModalContainer from './modal/ModalContainer.vue'
export default {
  components: {
    ModalContainer,
  },

  data() {
    return {
      todoInput: '',
    }
  },

  methods: {
    closeModal() {
      document.getElementById('edit-modal').hidden = true
    },

    editTodo() {
      this.$emit('editTodo', this.todoInput)
      this.todoInput = null
    }
  },
}
</script>
<style scoped>
/* Dimensions are left up to parent component by using class */
.modal-position {
    top: 33%;
}

.modal-content {
    display: flex;
    flex-direction: column;
}
.header {
    display: flex;
}

.modal-title {
    flex: 9;
    text-align: center;
}

.close-modal {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-weight: bold;
    font-size: 28px;
    cursor: pointer;
    background-color: rgb(54, 54, 54);
    color: rgb(0, 0, 0);
}

.modal-input-section {
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
}

</style>