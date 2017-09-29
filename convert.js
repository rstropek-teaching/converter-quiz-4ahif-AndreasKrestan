if(process.argv.length != 6){
  console.log("WARNING: PARAMETERS INVALID!");
  process.exit(1);
}else if(!parseFloat(process.argv[2])){    
    console.log("WARNING: PARAMETERS INVALID!");
    process.exit(1);
}

if(!checkParameters(process.argv[3], process.argv[5])){ 
    console.log("WARNING: PARAMETERS INVALID!");
}else if(process.argv[4] !== 'to'){
    console.log("WARNING: PARAMETERS INVALID!");
}else{
    const val1 = parseFloat(process.argv[2]);
    const val2 = convert(process.argv[3], process.argv[5], process.argv[2]);
    console.log(val1 +" "+process.argv[3]+ " are equal to "+ val2+ " "+process.argv[5] );
}

function convert(par1, par2, val){
    if(par1==="m"){
        switch(par2){
            
            case "mm":
                val = val*1000;
                break;
            case "cm":
                val = val*100;
                break;
        }
    }else if(par1 === "cm"){
        switch(par2){
            case "m":
                val = val/100;
                break;
            case "mm":
                val = val*10;
                break;
        }
    }else if(par1 === "mm"){
        switch(par2){
            case "m":
                val = val/1000;
                break;

            case "cm":
                val = val/10;
                break;
        }
    }else if(par1==="kg"){
        val = val*1000;
    }else if(par1==="g"){
        val = val/1000;
    }

    return val;
}

function checkParameters(par1, par2){
    const par = ["m", "cm", "mm", "kg", "g"];
    const includedPar1 = par.indexOf(par1) != -1;
    const includedPar2 = par.indexOf(par2) != -1;
    
    if(!includedPar1 || !includedPar2){
        return false;
    }
    if((par1 === 'm' || par1 === 'cm' || par1 ==='mm') && (par2 === 'kg' || par2 === 'g')){
        return false;
    }
    if((par1 === 'kg' || par1 === 'g') && (par2 === 'm' || par2 === 'cm' || par2 ==='mm')){
        return false;
    }
    return true;
}