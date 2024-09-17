/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Cathy Rocker
      Date:   September 15, 2024

      Filename: project03-02a.js
*/

let captions = new Array(14);
captions[0]="Anise-Scented Sage";
captions[1]="Big Leaf Aster]";
captions[2]="Black-Eyed Susan"; 
captions[3]="Blue Goldenrod"; 
captions[4]="Butterfly Bush"; 
captions[5]="Cardinal Flower";
captions[6]="Chrysanthemum";
captions[7]="Coneflower";
captions[8]="Crape Myrtle";
captions[9]="Dahlia";
captions[10]="Daisy";
captions[11]="Fuchsia";
captions[12]="Geranium";
captions[13]="Golden Columbine";


//declare the htmlCode variable, setting its initial value to an empty text string.

let htmlCode = "";

//Create a for loop with a counter that goes from 0 to less the length of the captions array in increments of 1.

        for (let i = 0; i < captions.length; i++) 
        {
            htmlCode += "<figure>\n";
            htmlCode += "<img alt='' src='pic" + i + ".jpg'/>\n";
            htmlCode += "<figcaption>" + captions[i] + "</figcaption>\n";
            htmlCode += "</figure>\n";
        }

//Insert the generated HTML into the gallery div
        document.getElementById('gallery').innerHTML = htmlCode;