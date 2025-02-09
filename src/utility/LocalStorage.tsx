interface LocalStorageProps {
    name: string;
}

interface LocalStorageSetProps extends LocalStorageProps {
    value: string;
}

const SetLocalStorage = ({ name, value }: LocalStorageSetProps): void => {
    localStorage.setItem(name, value);
}

const GetLocalStorage = ({ name }: LocalStorageProps): string | null => {
    return localStorage.getItem(name);
}


const RemoveLocalStorage = ({ name }: LocalStorageProps): void => {
    localStorage.removeItem(name);
}

export { SetLocalStorage, GetLocalStorage, RemoveLocalStorage };
