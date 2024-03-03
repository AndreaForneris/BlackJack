window.onload = function () {
    /*-------------------------------------CREAZIONE DINAMICA------------------------------------*/

    let _body = document.getElementsByTagName("body")[0];
    _body.style.backgroundImage="url('../IMG/sfondo1.jpg')";
    _body.style.backgroundSize="100%";
    _body.style.fontFamily="Calibri";

    let wrapper = document.createElement("div");
    _body.appendChild(wrapper);

    //(Visualizza se si vince/perde)------------------------------------------------Label Risultato
    let lblRis = document.createElement("div");
    lblRis.style.fontSize = "80pt";
    lblRis.style.marginTop = "-30%";
    lblRis.style.textAlign = "center";
    lblRis.style.backgroundColor="rgba(255, 255, 255, 0)";
    lblRis.style.border = "none";
    lblRis.style.overflow="none";
    lblRis.setAttribute("id","lblRis");
    _body.appendChild(lblRis);

    //(Inizia nuova partita)----------------------------------------------------------Bottone Nuova
    let btnNuova = document.createElement("button");
    btnNuova.innerText="NUOVA PARTITA";
    btnNuova.style.width="100px";
    btnNuova.style.marginLeft="10px";
    btnNuova.style.height="50px";
    btnNuova.style.float="left";
    btnNuova.style.fontSize="15pt";
    btnNuova.setAttribute("id","btnNuova");
    btnNuova.addEventListener("click", function (){nuova();});
    wrapper.appendChild(btnNuova);

    //(Contiene la zona di gioco)--------------------------------------------------------Div Tavolo
    let tavolo = document.createElement("div");
    tavolo.style.margin="0 auto";
    tavolo.style.marginTop="2%";
    tavolo.style.width="70%";
    tavolo.style.height="750px";
    tavolo.style.backgroundImage="url('../IMG/tavolo2.jpg')";
    tavolo.style.backgroundRepeat= "repeat-x";
    tavolo.style.backgroundSize= "100%";
    tavolo.style.border= "8px solid black";
    tavolo.style.borderRadius= "5% 5% 60% 60%";
    wrapper.appendChild(tavolo);

    //(Contiene la zona di gioco del banco)-----------------------------------------------Div Banco
    let divBanco = document.createElement("div");
    divBanco.style.width="100%";
    divBanco.style.height="45%";
    divBanco.style.marginBottom="5%";
    tavolo.appendChild(divBanco);

    //(Visualizza la scritta "BANCO")---------------------------------------------------Label Banco
    let lblBanco = document.createElement("p");
    lblBanco.style.textAlign = "center";
    lblBanco.style.fontSize = "22pt";
    lblBanco.style.marginTop="1%"
    lblBanco.style.color = "#ffffff";
    lblBanco.innerHTML="<b>BANCO</b>";
    divBanco.appendChild(lblBanco);

    //(Contiene la somma delle carte del banco)-------------------------------------------Txt Banco
    let txtBanco = document.createElement("div");
    txtBanco.style.margin="0 auto";
    txtBanco.style.lineHeight="50px";
    txtBanco.style.marginTop = "2%";
    txtBanco.style.marginBottom = "3%";
    txtBanco.style.border = "5px solid black";
    txtBanco.style.borderRadius = "100%";
    txtBanco.style.backgroundColor = "#666666";
    txtBanco.style.color = "#ffffff";
    txtBanco.style.width="50px";
    txtBanco.style.height="50px";
    txtBanco.value=0;
    txtBanco.setAttribute("id","txtBanco");
    divBanco.appendChild(txtBanco);

    //(Contiene la zona di gioco del player)---------------------------------------------Div Player
    let divPlayer = document.createElement("div");
    divPlayer.style.width="100%";
    divPlayer.style.height="45%";
    tavolo.appendChild(divPlayer);

    //(Dà una nuova carta al player)--------------------------------------------------Bottone Carta
    let btnCarta = document.createElement("button");
    btnCarta.innerText="CARTA";
    btnCarta.style.width="100px";
    btnCarta.style.height="50px";
    btnCarta.style.float="right";
    btnCarta.style.marginRight="12%";
    btnCarta.style.fontSize="15pt";
    btnCarta.setAttribute("pos","0");
    btnCarta.setAttribute("id","btnCarta");
    btnCarta.addEventListener("click", function (){carta();});
    wrapper.appendChild(btnCarta);

    //(Confronta i punteggi tra banco/player)------------------------------------------Bottone Stai
    let btnStai = document.createElement("button");
    btnStai.innerText="STAI";
    btnStai.style.width="100px";
    btnStai.style.height="50px";
    btnStai.style.float="left";
    btnStai.style.marginLeft="12%";
    btnStai.style.fontSize="15pt";
    btnStai.disabled=true;
    btnStai.setAttribute("id","btnStai");
    btnStai.addEventListener("click", function (){stai();});
    wrapper.appendChild(btnStai);

    //(Contiene le carte del banco)-------------------------------------------------Div Carte Banco
    let divCarteB=document.createElement("div");
    divCarteB.style.height="41%";
    divCarteB.style.width="48%";
    divCarteB.style.margin="0 auto";
    divBanco.appendChild(divCarteB);

    //(Contiene le carte del Player)-----------------------------------------------Div Carte Player
    let divCarteP=document.createElement("div");
    divCarteP.style.height="41%";
    divCarteP.style.width="48%";
    divCarteP.style.margin="0 auto";
    divPlayer.appendChild(divCarteP);

    //(Genera i contenitori delle carte del banco)---------------------------------Slot Carte Banco
    for (let i=0;i<4;i++){
        let div = document.createElement("div");
        div.style.height="140px";
        div.style.width="100px";
        div.style.marginLeft="2px";
        div.setAttribute("class","slotCarteB");
        div.setAttribute("id","B," + i);
        div.style.display="inline-block";
        div.style.backgroundSize="100%";
        divCarteB.appendChild(div);
    }

    //(Genera i contenitori delle carte del Player)-------------------------------Slot Carte Player
    for (let i=0;i<6;i++){
        let div = document.createElement("div");
        div.style.height="140px";
        div.style.width="100px";
        div.style.marginLeft="2px";
        div.setAttribute("class","slotCarteP");
        div.setAttribute("id","P," + i);
        div.style.display="inline-block";
        div.style.backgroundSize="100%";
        divCarteP.appendChild(div);
    }

    //(Contiene la somma delle carte del Player)-----------------------------------------Txt Player
    let txtPlayer = document.createElement("div");
    txtPlayer.style.margin="0 auto";
    txtPlayer.style.marginTop="3%";
    txtPlayer.style.lineHeight="50px";
    txtPlayer.style.border = "5px solid black";
    txtPlayer.style.borderRadius = "100%";
    txtPlayer.style.backgroundColor = "#666666";
    txtPlayer.style.color = "#ffffff";
    txtPlayer.style.width="50px";
    txtPlayer.style.height="50px";
    txtPlayer.value=0;
    txtPlayer.setAttribute("id","txtPlayer");
    divPlayer.appendChild(txtPlayer);

    //(Visualizza la scritta "GIOCATORE")----------------------------------------------Label Player
    let lblPlayer= document.createElement("p");
    lblPlayer.style.textAlign = "center";
    lblPlayer.style.fontSize = "22pt";
    lblPlayer.style.marginTop="2%"
    lblPlayer.style.color = "#ffffff";
    lblPlayer.innerHTML="<b>GIOCATORE</b>";
    divPlayer.appendChild(lblPlayer);
};

/*---------------------------------------------FUNZIONI-------------------------------------------*/

//(Dà una carta al player e controlla se ha sballato)--------------------Funzione del bottone Carta
function carta(){
    let _btnStai=document.getElementById("btnStai");
    let _lblRis=document.getElementById("lblRis");
    let _btnCarta=document.getElementById("btnCarta");
    let _txtPlayer=document.getElementById("txtPlayer");
    let _slotCarte=document.getElementsByClassName("slotCarteP");
    let i=parseInt(_btnCarta.getAttribute("pos"));

    estrazioneCarta(i,_slotCarte,_txtPlayer);
    i++;
    _btnCarta.setAttribute("pos","" + i);
    _btnStai.disabled=false;
    _txtPlayer.innerHTML = "<h1>&nbsp"+ _txtPlayer.value +"</h1>";

    if (_txtPlayer.value>21) {
        _txtPlayer.style.color="red";
        _lblRis.innerHTML="<h1>HAI PERSO</h1>";
        _lblRis.style.color="red";
        _btnCarta.disabled=true;
        _btnStai.disabled=true;
    }
}

//(Estrae e confronta il punteggio del banco con quello del player)-------Funzione del bottone Stai
function stai() {
    let _btnStai=document.getElementById("btnStai");
    let _lblRis=document.getElementById("lblRis");
    let _btnCarta=document.getElementById("btnCarta");
    let _txtBanco=document.getElementById("txtBanco");
    let _txtPlayer=document.getElementById("txtPlayer");
    let _slotCarte=document.getElementsByClassName("slotCarteB");

    for (let i=0;i<4;i++){
        estrazioneCarta(i,_slotCarte,_txtBanco);
    }

    _txtBanco.innerHTML="<h1>&nbsp"+ _txtBanco.value +"</h1>"
    _btnCarta.disabled=true;
    _btnStai.disabled=true;

    if (_txtBanco.value>21){
        _txtPlayer.style.color="#c9c901";
        _lblRis.innerHTML="<h1>HAI VINTO</h1>";
        _lblRis.style.color="#c9c901";
        _btnCarta.disabled=true;
        _btnStai.disabled=true;
    }else if(_txtBanco.value>_txtPlayer.value){
        _txtPlayer.style.color="red";
        _lblRis.innerHTML="<h1>HAI PERSO</h1>";
        _lblRis.style.color="red";
        _btnCarta.disabled=true;
        _btnStai.disabled=true;
    }else if(_txtBanco.value === _txtPlayer.value){
        _txtPlayer.style.color="#187fff";
        _lblRis.innerHTML="<h1>PAREGGIO</h1>";
        _lblRis.style.color="#187fff";
        _btnCarta.disabled=true;
        _btnStai.disabled=true;
    }else{
        _txtPlayer.style.color="#c9c901";
        _lblRis.innerHTML="<h1>HAI VINTO</h1>";
        _lblRis.style.color="#c9c901";
        _btnCarta.disabled=true;
        _btnStai.disabled=true;
    }


}

//(Estrae una carta casuale)----------------------------------------Sottoprogramma Estrazione Carte
function estrazioneCarta(i, _slotCarte, _txt) {
    let seme;
    let rndS;
    rndS = Math.floor(Math.random() * 4) + 1;
    switch (rndS){
        case 1:
            seme='F';
            break;
        case 2:
            seme='P';
            break;
        case 3:
            seme='Q';
            break;
        case 4:
            seme='R';
            break;
    }

    let rndN;
    rndN = Math.floor(Math.random() * 10) + 1;
    _txt.value += rndN;
    switch (rndN) {
        case 1:
            _slotCarte[i].style.backgroundImage = "url('../IMG/carte/A" + seme + ".png')";
            break;
        case 2:
            _slotCarte[i].style.backgroundImage = "url('../IMG/carte/2" + seme + ".png')";
            break;
        case 3:
            _slotCarte[i].style.backgroundImage = "url('../IMG/carte/3" + seme + ".png')";
            break;
        case 4:
            _slotCarte[i].style.backgroundImage = "url('../IMG/carte/4" + seme + ".png')";
            break;
        case 5:
            _slotCarte[i].style.backgroundImage = "url('../IMG/carte/5" + seme + ".png')";
            break;
        case 6:
            _slotCarte[i].style.backgroundImage = "url('../IMG/carte/6" + seme + ".png')";
            break;
        case 7:
            _slotCarte[i].style.backgroundImage = "url('../IMG/carte/7" + seme + ".png')";
            break;
        case 8:
            _slotCarte[i].style.backgroundImage = "url('../IMG/carte/8" + seme + ".png')";
            break;
        case 9:
            _slotCarte[i].style.backgroundImage = "url('../IMG/carte/9" + seme + ".png')";
            break;
        case 10:
            _slotCarte[i].style.backgroundImage = "url('../IMG/carte/10" + seme + ".png')";
            break;
    }


}

//(Ricarica il contenuto della pagina)---------------------------Funzione del bottone Nuova Partita
function nuova() {
    location.reload();
}