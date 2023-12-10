function cal(){
    //歌唱メンバーチェック
    kaho = document.getElementById("kahoCheckBox").checked;
    sayaka = document.getElementById("sayakaCheckBox").checked;
    rurino = document.getElementById("rurinoCheckBox").checked;
    kozue = document.getElementById("kozueCheckBox").checked;
    tsuduri = document.getElementById("tsuduriCheckBox").checked;
    megumi = document.getElementById("megumiCheckBox").checked;
    if(kaho === false && sayaka === false && rurino === false && kozue === false && tsuduri === false && megumi ===false){
        alert("歌唱メンバーが選択されていません。");
        return
    }

    //リハーサルスコアチェック
    if(String(document.getElementById("rehearsalScore").value) === ""){
        alert("リハーサルスコアが入力されていません。");
        return
    }
    
    //Season Fan Lvの倍率計算
    season_fan_lv = 0;
    season_fan_lv_list = [0,0,20,28,35,43,50,55,60,65,70];

    season_fan_lv += season_fan_lv_list[parseInt(document.getElementById("kahoFanLv").value)];
    season_fan_lv += season_fan_lv_list[parseInt(document.getElementById("sayakaFanLv").value)];
    season_fan_lv += season_fan_lv_list[parseInt(document.getElementById("rurinoFanLv").value)];
    season_fan_lv += season_fan_lv_list[parseInt(document.getElementById("kozueFanLv").value)];
    season_fan_lv += season_fan_lv_list[parseInt(document.getElementById("tsuduriFanLv").value)];
    season_fan_lv += season_fan_lv_list[parseInt(document.getElementById("megumiFanLv").value)];

    season_fan_lv_magnification = (season_fan_lv + 100) / 100;

    //解放レベルの倍率計算
    totsu_lv = 0;
    totsu_r = [0,0,10,15,20,25];
    totsu_sr = [0,0,15,25,30,35];
    totsu_ur = [0,0,20,30,35,40];

    if(kaho === true){
        switch(String(document.getElementById("kahoRarity").value)){
            case "R": totsu_lv += totsu_r[parseInt(document.getElementById("kahoTotsuLv").value)];break;
            case "SR": totsu_lv += totsu_sr[parseInt(document.getElementById("kahoTotsuLv").value)];break;
            case "UR": totsu_lv += totsu_ur[parseInt(document.getElementById("kahoTotsuLv").value)];break;
        }
    }
    if(sayaka === true){
        switch(String(document.getElementById("sayakaRarity").value)){
            case "R": totsu_lv += totsu_r[parseInt(document.getElementById("sayakaTotsuLv").value)];break;
            case "SR": totsu_lv += totsu_sr[parseInt(document.getElementById("sayakaTotsuLv").value)];break;
            case "UR": totsu_lv += totsu_ur[parseInt(document.getElementById("sayakaTotsuLv").value)];break;
        }
    }
    if(rurino === true){
        switch(String(document.getElementById("rurinoRarity").value)){
            case "R": totsu_lv += totsu_r[parseInt(document.getElementById("rurinoTotsuLv").value)];break;
            case "SR": totsu_lv += totsu_sr[parseInt(document.getElementById("rurinoTotsuLv").value)];break;
            case "UR": totsu_lv += totsu_ur[parseInt(document.getElementById("rurinoTotsuLv").value)];break;
        }
    }
    if(kozue === true){
        switch(String(document.getElementById("kozueRarity").value)){
            case "R": totsu_lv += totsu_r[parseInt(document.getElementById("kozueTotsuLv").value)];break;
            case "SR": totsu_lv += totsu_sr[parseInt(document.getElementById("kozueTotsuLv").value)];break;
            case "UR": totsu_lv += totsu_ur[parseInt(document.getElementById("kozueTotsuLv").value)];break;
        }
    }
    if(tsuduri === true){
        switch(String(document.getElementById("tsuduriRarity").value)){
            case "R": totsu_lv += totsu_r[parseInt(document.getElementById("tsuduriTotsuLv").value)];break;
            case "SR": totsu_lv += totsu_sr[parseInt(document.getElementById("tsuduriTotsuLv").value)];break;
            case "UR": totsu_lv += totsu_ur[parseInt(document.getElementById("tsuduriTotsuLv").value)];break;
        }
    }
    if(megumi === true){
        switch(String(document.getElementById("megumiRarity").value)){
            case "R": totsu_lv += totsu_r[parseInt(document.getElementById("megumiTotsuLv").value)];break;
            case "SR": totsu_lv += totsu_sr[parseInt(document.getElementById("megumiTotsuLv").value)];break;
            case "UR": totsu_lv += totsu_ur[parseInt(document.getElementById("megumiTotsuLv").value)];break;
        }
    }

   totsu_lv_magnification = (totsu_lv + 100) / 100;

   //グランプリスコア計算
   grand_prix_score = Math.ceil(parseInt(document.getElementById("rehearsalScore").value) * season_fan_lv_magnification * totsu_lv_magnification).toLocaleString();
   grand_prix_score_div = document.getElementById("grandPrixScore");
   grand_prix_score_div.innerHTML = "";
   grand_prix_score_div.innerHTML = "<span>グランプリスコア：" + grand_prix_score + " pt</span><br>" +
                                    "<br>" +
                                    "<span>グランプリPt.ボーナス</span><br>" + 
                                    "<span>解放Lv.ボーナス：×" + totsu_lv_magnification + "</span><br>" + 
                                    "<span>Season Fan Lv.ボーナス：×" + season_fan_lv_magnification + "</span>";
   
}