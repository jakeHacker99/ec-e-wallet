<template>
<div>

    <Card 
    :myCardsNumber ="myCardsNumber"
    :validMonth ="validMonth"
    :myCardscolor ="vendor.bgcolor"
    :textColor ="vendor.color"
    :myCardsHolder ="myCardsHolder"
    :vendorIcon="vendor.img" 
    :validYear ="validYear"
    
    />
    
      
   <section class="myCards-form">
      <label for="number" class="info">
         Card Number
      </label>
      <input type="text" maxlength="16" name="number"  placeholder="XXXX XXXX XXXX XXXX" class="info"
      v-model="myCardsNumber">

      
        <label for="myCardsholder" class="info">
           Cardholder Name
         </label>
      <input type="text" maxlength="20" name="myCardsholder" placeholder="Firstname Lastname" class="info"
      v-model="myCardsHolder">
         <label for="month">Month</label>
         <label for="year">Year</label>
      <select name="month" 
      v-model="validMonth">
         <option value="01">01</option> 
         <option value="02">02</option> 
         <option value="03">03</option>
         <option value="04">04</option>
         <option value="05">05</option>
         <option value="06">06</option>
         <option value="07">07</option>
         <option value="08">08</option>
         <option value="09">09</option>
         <option value="10">10</option>
         <option value="11">11</option>
         <option value="12">12</option>
      </select> 
      <select name="month"
      v-model="validYear">
         <option value="21">21</option>
         <option value="22">22</option>
         <option value="23">23</option>
         <option value="24">24</option>
         <option value="25">25</option>
         <option value="26">26</option>
         <option value="27">27</option>
      </select> 
      <label for="vendor" class="info">Vendor</label>
       <select name="vendor" class="info"
        v-model="vendor" >
         <option  :value ="vendor" :key ="vendor.id" v-for="vendor in vendors" >{{vendor.name}}</option> 
         
         
       </select>
   </section>
   <a id="button"
    @click="addCardClick()">
      add myCards
    </a>
</div>
</template>


<script>
import Card from '@/components/Card.vue'
export default {
    components: {
    Card
  },
   data(){return{
    myCardsNumber: '',
    myCardsHolder: '',
    validMonth: 'MM',
    validYear: 'YY',
    vendors: this.$root.vendors,
        vendor: {}
    
      
     }},
     methods:{
         
        addCardClick(){
            this.$emit('addcard',{
                myCardsNumber: this.myCardsNumber,
                bgcolor: this.vendor.bgcolor,
                validYear:  this.validYear,
                validMonth:  this.validMonth,
                color: this.vendor.color,
                myCardsHolder: this.myCardsHolder,
                img: this.vendor.img,
                
            })
        }
         
         
     },
    
     
}
</script>
  

<style scoped>

select, input {
    margin: 0 0 .7rem;
    box-sizing: border-box;
    padding: .5rem;
    height: 2.6rem;
    font-size: 1rem;
    width: 100%;
    border: 2px solid #000;
    border-radius: .30rem;
    
}
label {
    padding: .23rem 0;
    font-size: .4rem;
}

.myCards-form {
    max-width: 25rem;
    display: grid;
    height: 13rem;
    margin-top: 2rem;
    gap: 0 3rem;
    margin-bottom: 4rem;

    
}
.info {
    grid-column: auto/span 2;
}

</style>