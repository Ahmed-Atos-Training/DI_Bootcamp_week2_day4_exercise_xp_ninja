
// exercice2
function calculateTip(){
    
  let facture =prompt("   John quel est le montant de la facture?" )
  facture = parseFloat(facture)
  let pourboire;
  if(facture < 50 ){
     pourboire = (20*facture) / 100 
  }
  else if (facture  >= 50 && facture <= 200){
       pourboire =(15*facture)/100
  }
  else if( facture > 200){
       pourboire = (10*facture)/100
  }
  let montantPourboireFacture = facture + pourboire
  console.log(` the tip amount is ${pourboire}$  and the final bill  ${montantPourboireFacture}`)
}
calculateTip()

