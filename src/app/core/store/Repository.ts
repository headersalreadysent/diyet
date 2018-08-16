import { NgForage } from "ngforage";


export class Repository {

	repo = '';
	value: any = null;

	constructor(private readonly ngf: NgForage, repo: string) {
		this.repo = repo;
	}

	/**
	 * load from store
	 */
	load() {
		return this.get();
	}

	/**
	 * create new item
	 * @param value 
	 */
	create(value) {
		return this.set(value)
	}

	/**
	 * set value of item
	 * @param value 
	 */
	set(value) {
		this.value = value;
		return this;
	}

	/**
	 * merge with another object
	 * @param merge 
	 */
	merge(merge){
		Object.assign(this.value,merge);
		return this;
	}

	/**
	 * update for given value
	 * @param value 
	 */
	update(value) {
		this.value = value;
		return this.ngf.setItem(this.repo, value);
	}

	/**
	 * get and store 
	 */
	get() {
		return this.ngf.getItem(this.repo).then((item) => {
			this.value = item;
			return item;
		});
	}

	/**
	 * save item to store
	 */
	save() {
		return this.ngf.setItem(this.repo, this.value);
	}

	/**
	 * remove item
	 */
	remove() {
		this.value = null;
		return this.ngf.removeItem(this.repo);
	}
}