import {Component} from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {Item, NavController} from "ionic-angular";
import {InfoPage} from "../info/info";
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from "rxjs/Observable"

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {



    speakersListRef: AngularFirestoreCollection;
    speakerList: Observable;

    lists: any;

    //dataService can be named anything
    constructor(public navCtrl: NavController, public dataService: DataProvider, afs: AngularFirestore) {

        this.speakersListRef = afs.collection('Speakers');
        this.speakerList = this.speakersListRef.valueChanges();


    }

    ionViewDidLoad() {
        this.lists = this.dataService.lists;
    }

    itemClicked(item): void {
        console.log(item);
        this.navCtrl.push(InfoPage, item);
    }

}
