import { Injectable } from '@angular/core';
import { NgForage } from 'ngforage';
import { Repository } from './Repository';

@Injectable()
export class StoreService {

	constructor(private readonly ngf: NgForage) {
		

	}

	repo(item:string){
		return new Repository(this.ngf,item);
	}

	clear(){
		return this.ngf.clear();
	}

	length(){
		return this.ngf.length();
	}

	keys(){
		return this.ngf.keys();
	}
}
