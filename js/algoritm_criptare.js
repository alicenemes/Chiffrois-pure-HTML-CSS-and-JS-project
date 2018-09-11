
// verifica daca prima litera e vocala
var v="AaAaÂâEeÉéEeEeËëIiÎîIiOoÔôUuUuUuÜüLl-',.;:?1234567890";

function vocala(str)
{
	var h=true;
	if (v.indexOf(str.charAt(0))==-1)
	{
		h=false;
	}
	return h;
}

// vocala aleatorie

function ran_voc()
{
var ran = "";
var voc = "aeiou";

while (ran.length < 1) {
  ran += voc[Math.floor(Math.random() * voc.length)];
}
return ran;
}

// cripteaza cuvantul

function cript(str)
{
var ran=ran_voc();
var str1 = str;
var car="";
if (".,?!;:".indexOf(str.charAt(str.length-1))!=-1)
{
	car=str.charAt(str.length-1);
	str=str.slice(0,-1);
} else {	car=""	}
if (!vocala(str))
{
	if (str.charAt(0)==str.charAt(0).toLowerCase())
	{
		str=str.concat(str.charAt(0),ran);
		str=str.slice(1);
		str="l".concat(str);
	}
	else 
	{
		str=str.concat(str.charAt(0).toLowerCase(),ran);
		str=str.slice(1);
		str="L".concat(str);
	}
}
else
	{
		str1=str;
    	str="";
    	while ((vocala(str1))&&(str1!=""))
        {
            str=str.concat(str1.charAt(0));
            str1=str1.slice(1);
        }
        if (str1!="")
		{
			if (str1.charAt(0)==str1.charAt(0).toLowerCase())
			{
				str=str.concat("l");
				str1=str1.concat(str1.charAt(0),"i");
				str=str.concat(str1.slice(1));
			}
			else 
			{
				str=str.concat("L");
				str1=str1.concat(str1.charAt(0).toLowerCase(),ran);
				str=str.concat(str1.slice(1));
			}
		}
    }
	str=str.concat(car);
	return str;
}

// propozitii 

function prop(str)
{
	var str1=""; str2=""; i=0;
if (str.indexOf(' ')==-1)
{
	str2=cript(str);
}
else
{
	str=str.concat(" ");
	for (i=0; i<str.length; i++)
	{
		if (str.charAt(i)!=" ")
		{
			str1=str1.concat(str.charAt(i));
		}
		else
		{
			str1=cript(str1);
			str2=str2.concat(str1,' ');
			str1="";
		}
	}
}
	return str2;
}
