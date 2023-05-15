let l = document.getElementsByClassName('place');
let rows = document.getElementsByClassName('row');
let rowsL = {};
let placeArr = [], placeCount = 0;

const chooseCL = "rgb(32, 205, 185)";

for (let i = 0; i < rows.length; i++) {
    rowsL[i] = rows[i].children.length;
}
for (let i = 1; i < rows.length; i++) {
    rowsL[i] += rowsL[i - 1];
}
console.log(rowsL);
for (let i = 1; i <= l.length; i++) {
    l[i - 1].onclick = function () {
        if (this.style.background == chooseCL)
            this.style.background = '';
        else
            this.style.background = chooseCL;
        //console.log(i);
        let rowi, placei;
        rowi = findRow(i);
        if (rowi != 1)
            placei = i - rowsL[rowi - 2];
        else
            placei = i;
        // console.log(rowi, placei);
        if (this.style.background == chooseCL) {
            let placeObj = { key: i, row: rowi, place: placei };
            placeArr.push(placeObj);
        } else {
            let j;
            for (j = 0; j < placeArr.length; j++) {
                if (i == placeArr[j].key)
                    break;
            }
            // console.log(i);
            placeArr.splice(j, 1);
        }
        console.log(placeArr);
        document.getElementById("placeCh").textContent = '';
        for (j = 0; j < placeArr.length; j++) {
            document.getElementById("placeCh").textContent += " " + placeArr[j].row + "/" + placeArr[j].place;
        }
    }
}

function findRow(placeIndex) {
    for (let j = 0; j < rows.length; j++) {
        if (placeIndex <= rowsL[j]) {
            return j + 1;
        }
    }
}
