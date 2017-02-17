declare module "meteor/ground:db" {

  interface IGroundCollection {
    observeSource(source: any);

    find(...args);

    findOne(...args);

    insert(...args);

    upsert(selector: any, ...args);

    update(selector: any, ...args);

    remove(selector: any, ...args);

    clear();

    keep(selector: any);
  }

  class Collection implements IGroundCollection {
    constructor(name: string, options?: any)

    observeSource(source: any)

    find(...args)

    findOne(...args)

    insert(...args)

    upsert(selector: any, ...args)

    update(selector: any, ...args)

    remove(selector: any, ...args)

    clear()

    keep(selector: any)
  }
}
