class Covek {
    constructor(ime, prezime, godinaRodjenja) {
    this.ime = ime;
    this.prezime = prezime;
    this.godinaRodjenja = godinaRodjenja;
    }
}

class Student {
    constructor(trenutnaGodinaStudija, trenutniProsek) {
        this.trenutnaGodinaStudija = trenutnaGodinaStudija;
        this.trenutniProsek = trenutniProsek;
    }
}

        class StudentOS extends Student {
            constructor(trenutnaGodinaStudija, trenutniProsek, smerOsnovihStudija) {
                super(trenutnaGodinaStudija, trenutniProsek);
                this.smerOsnovihStudija = smerOsnovihStudija;
            }
        }

        class StudentMS extends Student {
            constructor(trenutnaGodinaStudija, trenutniProsek, smerMasterStudija) {
                super(trenutnaGodinaStudija, trenutniProsek);
                this.smerMasterStudija = smerMasterStudija;
            }
        }

class Zaposleni {
    constructor(godinaZaposlenja, plata) {
        this.godinaZaposlenja = godinaZaposlenja;
        this.plata = plata;
    }
}

        class Nastavnik extends Zaposleni{
            constructor(godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta) {
                super(godinaZaposlenja, plata);
                this.omiljeniPredmet = omiljeniPredmet;
                this.listaPredmeta = listaPredmeta;
            }
        }

                class Profesor extends Nastavnik {
                    constructor(godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, titula) {
                        super(godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta);
                        this.titula = titula;
                    }
                }

                class Asistent extends Nastavnik {
                    constructor(godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, smerDoktorskihStudija) {
                        super(godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta);
                        this.smerDoktorskihStudija = smerDoktorskihStudija;
                    }
                }

class Sluzbenik {
    constructor(odsek) {
        this.odsek = odsek;
    }
}

let covek = new Covek('Pera','Peric',1988);
console.log(covek);


let student = new Student(3, 8.76);
console.log(student);


let studentOS = new StudentOS(2, 7.69, 'Zeleznicki');
console.log(studentOS);


let studentMS = new StudentMS(4, 9.3, 'Vazdusni');
console.log(studentMS);


let zaposleni = new Zaposleni(2007, 67000);
console.log(zaposleni);


let nizPredmeta = ['Bezbednost vazduhoplova', 'Modeliranje u zeleznickom saobracaju', 'Modeliranje lanaca snabdevanja', 'Modeliranje, simulacija i animacija'];


let nastavnik = new Nastavnik(2002, 86000, 'Modeliranje, simulacija i animacija', nizPredmeta);
console.log(nastavnik);


let profesor = new Profesor(2003, 77000, 'Bezbednost vazduhoplova', nizPredmeta, 'redovni');
console.log(profesor);


let asistent = new Asistent(2015, 45000, 'Modeliranje, simulacija i animacija', nizPredmeta, 'Interent programiranje u saobracaju');
console.log(asistent);


let sluzbenik = new Sluzbenik('Logistika');
console.log(sluzbenik);