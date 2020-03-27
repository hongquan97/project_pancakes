<template>
  <div id="PE">
    <b>Programme Electives</b>
    <div v-if="Module">{{checkModule()}}</div>
    <div v-for="(pe,index) in com_p" :pe = "pe" :key="index"> 
      {{pe}} 
      <button @click="remove(pe)">x</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Module: String,
    com_p: Array
  },
  data() {
    return {
      FS_Compulsory : ["BT4013", "BT4016", "IS4228"],
      FS_Elective: ["BT4012", "BT4221", "BT4222", "IS4234", "IS4302"],
      MS_Compulsory: ["BT4211", "BT4212", "BT4222"],
      MS_Elective: ["BT4014", "BT4015", "BT4221", "IS3240", "IS4241"],
      A: ["DBA3712", "IE3120", "IS3240", "BT4013", "BT4016", "BT4211", "BT4212", "DBA4811", "IS4241", "IS4250", "MKT4418"],
      B: ["IE2110", "DBA3701", "CS3244", "DBA3803", "BSE4711", "BT4012", "BT4015", "BT4221", "BT4222", 
      "BT4240", "IS4241", "IE4210", "ST3131", "ST4245"],
      C: ["IS3221", "I3261", "BT4014", "IS4228", "IS4302"],
      PE: ["DBA3712", "IE3120", "IS3240", "BT4013", "BT4016", "BT4211", "BT4212", "DBA4811", "IS4241", "IS4250", "MKT4418",
      "IE2110", "DBA3701", "CS3244", "DBA3803", "BSE4711", "BT4012", "BT4015", "BT4221", "BT4222", 
      "BT4240", "IE4210", "ST3131", "ST4245", "IS3221", "I3261", "BT4014", "IS4228", "IS4302"],
      lenP: 0,
      moduleList: this.$store.getters.getList,
      user_A: this.$store.getters.getListA,
      user_B: this.$store.getters.getListB,
      user_C: this.$store.getters.getListC,
      FSCom: this.$store.getters.getFSCom,
      FSElect: this.$store.getters.getFSElect,
      MSCom: this.$store.getters.getMSCom,
      MSElect: this.$store.getters.getMSElect,
    }
  },
  methods: {
    checkModule() {   
      
      if(!this.com_p.includes(this.Module)) {
         
        if (this.com_p.length == 6) {
          this.$emit("goToUE", this.Module);
        }
        if (this.PE.includes(this.Module)) {


          if (this.$store.getters.getSpec == "Business Analytics") {
            if (this.Module.substring(2,3)!="4") {
              for (var i = 0; i < this.com_p.length; i++) {
                if (this.com_p[i].substring(2,3)!="4") {
                  this.$emit("goToUE", this.Module);
                  return;
                }
              }
            }
            if(this.A.includes(this.Module)){
              if (this.user_A.length == 4) {
                alert ("You need at least 2 PE modules from List B")
                this.$emit("goToUE", this.Module);
              } else {
                this.$store.dispatch("addA", this.Module)
              }
            }
            if(this.B.includes(this.Module)){
              if (this.user_B.length == 4) {
                alert ("You need at least 2 PE modules from List A")
                this.$emit("goToUE", this.Module);
              } else {
                this.$store.dispatch("addB", this.Module)
              }
            }
            if(this.C.includes(this.Module)){
              if (this.user_C.length == 2) {
                alert ("You need at least 2 PE modules from List A and List B each")
                this.$emit("goToUE", this.Module);
              } else {
                this.$store.dispatch("addC", this.Module)
              }
            }

          }


          else if (this.$store.getters.getSpec == "Business Analytics (Financial Analytics Specialisation)") {
            if(this.FS_Compulsory.includes(this.Module)){
              this.$store.dispatch("addFSCom", this.Module)
            }
            else if(this.FS_Elective.includes(this.Module)){
              if(this.FSElect.length == 3) {
                alert("You can only take a maximum of 3 elective modules. This module will go to UE.")
                this.$emit("goToUE", this.Module);
              } else {
                this.$store.dispatch("addFSElect", this.Module)
              }
            }
            else{
              this.$emit("goToUE", this.Module);
            }
          }


          else if (this.$store.getters.getSpec == "Business Analytics (Marketing Analytics Specialisation)") {
            if(this.MS_Compulsory.includes(this.Module)){
              this.$store.dispatch("addMSCom", this.Module)
            }
            else if(this.MS_Elective.includes(this.Module)){
              if(this.MSElect.length == 3) {
                alert("You can only take a maximum of 3 elective modules. This module will go to UE.")
                this.$emit("goToUE", this.Module);
              } else {
                this.$store.dispatch("addMSElect", this.Module)
              }
            }
            else{
              this.$emit("goToUE", this.Module);
            }
          }
        
            
          }
          this.lenP = this.com_p.length;
            this.$emit('changeP', this.lenP);
        }
      },


    remove(x) {
      this.$store.dispatch("removePE", x);
      this.$emit('changeP');
    }
  }
}

</script>

<style scoped>
#PE {
  display: inline-block;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px;
  margin: 2px 2px; 
  width: 24.5%;
  height: 180px;
  overflow: auto;
  background: #f9ccac;
} 
@media only screen and (max-width: 768px) {
  #divL, #divR {
    float: none;
    display: block;
    width: 100%;
  }
}
h1 {
  color: black;
  text-align: center;
}
button {
  color: red;
}
</style>