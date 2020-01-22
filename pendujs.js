function chargement()
{
window.form1.mot.value="";
nbreperdu=0;
window.status="Vous avez "+nbreperdu+" erreures";
document.images[0].src="pendu"+nbreperdu+".JPG";
document.form1.tester.value="";
mot=mots[parseInt(Math.random()*10)];
//alert(mot);
for(i=0;i<mot.length;i++)
document.form1.mot.value+="-";


}



function regle()
{
alert("Bienvenu(e) dans le jeu du pendu réalisé par Skyderman & Skyderwoman dans le cadre d'un TP 'web'.\n Les règles sont très facile.\n Vous inscrivez des lettres dans le cadre 'lettres à tester' afin de deviner le mot caché. Si la lettre écrite est dans le mot, elle apparaîtra. Si celle-ci n'est pas dans le mot, une faute sera comptée. Au bout de dix erreurs vous serez pendu 'Haut et court'. Vous avez également la possibilité d'inscrire le mot complet (en cas d'erreur, il vous sera compté une faute). \n Si vous ne voulez pas utiliser votre clavier, utiliser le 'pavé', il suffit tout simplement de cliquer sur la lettre désirée avec votre souris.\n Bon jeu à tous!");


}






function verif()
{
document.form1.tester.value=document.form1.tester.value+" "+document.form1.lettre.value;
ajouter=false;
//document.form1.mot.value="ok";
//temp=document.form1.mot.value;

if (document.form1.lettre.value.length<2)
{for (i=0;i<document.form1.mot.value.length;i++)
if (mot.charAt(i)==document.form1.lettre.value){ 
document.form1.mot.value=document.form1.mot.value.substring(0,i)+document.form1.lettre.value+document.form1.mot.value.substring(i+1,document.form1.mot.value.length);//+temp.substr(i+1,temp.length);
ajouter=true;}

//alert("ok");
//document.form1.mot.value=temp;
if (document.form1.mot.value==mot){alert("Bravo tu as gagné !!!");if (confirm("Voulez-vous rejouer")==true)chargement();}
}
else if(document.form1.lettre.value==mot){document.form1.mot.value=mot;alert("Bravo tu as gagné !!!");ajouter=true;}
if(ajouter==false)nbreperdu=parseInt(nbreperdu)+1;
//alert(lettre);
window.status="Vous avez "+nbreperdu+" erreures";
document.images[0].src="pendu"+nbreperdu+".JPG";
if(nbreperdu==10)
	{
	alert("Perdu!!! , le mot était "+mot);
	if (confirm("Voulez-vous rejouer")==true)chargement();
	}



}




