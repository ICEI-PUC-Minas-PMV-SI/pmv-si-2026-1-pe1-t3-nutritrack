class CRUD {

    constructor(storageKey){
        this.key = storageKey;
    }

    _getData(){
        return JSON.parse(localStorage.getItem(this.key)) || [];
    }

    _setData(data){
        localStorage.setItem(this.key, JSON.stringify(data));
    }

    create(item){
        const data = this._getData();
        item.id = Date.now(); // ID único
        data.push(item);
        this._setData(data);
        return item;
    }

    read(){
        return this._getData();
    }

    update(id, newItem){
        let data = this._getData();

        data = data.map(item =>
            item.id === id ? { ...item, ...newItem } : item
        );

        this._setData(data);
    }

    delete(id){
        let data = this._getData();

        data = data.filter(item => item.id !== id);

        this._setData(data);
    }

}