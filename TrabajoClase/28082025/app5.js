let var1 = parseInt(prompt("Numero1"));
let var2 = parseInt(prompt("Numero2"));
let var3 = parseInt(prompt("Numero3"));

if(var1 == var2 && var2 == var3)
    {
        console.log("Todos son iguales")
    }else
        {
            if(var2 > var3)
                            {
                                if(var1 > var3)
                                    {
                                        console.log("El orden es: " + var2 + " " + var1 + " " + var3 + " ");
                                    }
                                    else
                                    {
                                        console.log("El orden es: " + var2 + " " + var3 + " " + var1 + " ");
                                    }
                            }
                            else
                                {
                                    if(var1 > var2)
                                        {
                                            if(var1 > var3)
                                                {
                                                    if(var2 > var3)
                                                        {
                                                            console.log("El orden es: " + var1 + " " + var2 + " " + var3 + " ");
                                                        }
                                                        else
                                                            {
                                                                console.log("El orden es: " + var1 + " " + var3 + " " + var2 + " ");
                                                            }
                                                }
                                        }
                                        else
                                            {
                                                if(var3 > var1)
                                                    {
                                                        if(var3 > var2)
                                                            {
                                                                if(var1 > var2)
                                                                    {
                                                                        console.log("El orden es: " + var3 + " " + var1 + " " + var2 + " ");
                                                                    }
                                                                    else
                                                                        {
                                                                            console.log("El orden es: " + var3 + " " + var2 + " " + var1 + " ");
                                                                        }
                                                            }
                                                    }
                                            }
                                }
            
        }
