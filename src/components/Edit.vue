<template>
    <div>
      <h2>Update Subscription</h2>
      <form @submit.prevent="onUpdateForm">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="subscription.name">
        </div>
        <div>
          <label for="description">Description</label>
          <input type="text" id="description" v-model="subscription.description">
        </div>
        <div>
          <label for="amount">Amount</label>
          <input type="number" id="amount" v-model="subscription.amount">
        </div>
        <div>
          <label for="frequency">Payment Frequency</label>
          <select id="frequency" v-model="subscription.frequency">
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>
        <button type="submit">Update Subscription</button>
      </form>
    </div>
  </template>

  <script>
  import db from '@/firebaseDb.js'

  export default {
    data() {
      return {
subscription: {}
      }
    },
    mounted() {
      const id = this.$route.params.id
      db.collection('subscriptions').doc(id).get()
        .then(doc => {
          this.subscription = doc.data()
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      onUpdateForm() {
        const id = this.$route.params.id
        db.collection('subscriptions').doc(id).update({
          name: this.subscription.name,
          description: this.subscription.description,
          amount: this.subscription.amount,
          frequency: this.subscription.frequency
        })
          .then(() => {
            this.$router.push('/subscriptions')
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  </script>
