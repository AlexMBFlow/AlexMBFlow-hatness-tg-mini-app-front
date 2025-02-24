import './PurchaseForm.css'
import { Button, createListCollection } from "@chakra-ui/react"
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog"

import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select"

import { Input } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { useState } from "react";
import { enqueueSnackbar, OptionsObject } from "notistack";

interface DialogProps {
    isOpen: boolean;
    productName: string | null;
    onCancel: () => void;
    onSubmit: () => void;
}

const getSnackbarOptions = (variant: "default" | "error" | "success" | "warning" | "info" | undefined) => {
    const snackbarOptions: OptionsObject<"default" | "error" | "success" | "warning" | "info"> = {
        variant,
        autoHideDuration: 20000,
        persist: true,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        }
    }

    return snackbarOptions
}

const initialState = {
    name: '',
    adressClient: '',
    sdecAddress: '',
    phone: '',
    size: null
}

export const PurchaseForm = ({ isOpen, onCancel, onSubmit, productName }: DialogProps) => {
    const [name, setName] = useState(initialState.name)
    const [adressClient, setAdressClient] = useState(initialState.adressClient)
    const [sdecAddress, setSdecAddress] = useState(initialState.sdecAddress)
    const [phone, setPhone] = useState(initialState.phone)
    const [size, setSize] = useState<null | string>(initialState.size)

    const validateAndSubmit = () => {
        if (!productName) {
            enqueueSnackbar("Произошла ошибка", getSnackbarOptions('error'))

        }

        if (!name || !adressClient || !sdecAddress || !phone || !size) {
            enqueueSnackbar("Некорректно заполнены некоторые поля", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                }
            })
            return
        }

        const orderMessage =
            `Здравствуйте! Хотел(-а) бы приобрести ${productName}:
ФИО: **${name}**
Точный адрес: **${adressClient}**
Адрес сдека: **${sdecAddress}**
Телефон: **${phone}**
Размер: **${size}**`;

        navigator.clipboard.writeText(orderMessage)
            .then(() => {
                enqueueSnackbar(<div>Текст заказа уже скопирован! Перешлите его нашему <a href='https://t.me/sherri270/'><span className='purchase-to-manager'>менеджеру</span> (кликабельно)</a></div>, getSnackbarOptions('success'))
            })
            .catch(() => {
                enqueueSnackbar(<div>Не удалось скопировать заказ в буфер обмена, для заказа обратитесь к нашему <a href='https://t.me/sherri270'><span className='purchase-to-manager'>менеджеру</span></a></div>, getSnackbarOptions('error'))
            })

        onSubmit() // {...}
    }

    const clothSize = createListCollection({
        items: [
            { label: "M", value: "M" },
            { label: "XL", value: "XL" },
        ],
    })

    const onDialogClose = () => {
        setName(initialState.name)
        setAdressClient(initialState.adressClient)
        setSdecAddress(initialState.sdecAddress)
        setPhone(initialState.phone)
        setSize(initialState.size)
    }

    return (
        <DialogRoot onExitComplete={onDialogClose} onEscapeKeyDown={onCancel} closeOnEscape open={isOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Оформление заказа</DialogTitle>
                    <DialogDescription mb="4">
                        Большое вам спасибо ❤️
                    </DialogDescription>
                </DialogHeader>
                <DialogBody>
                    <p>
                        Пожалуйста, заполните поля
                    </p>
                    <Field style={{
                        paddingTop: '1.5rem'
                    }} className="form-field" label='ФИО' required>
                        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Иванов Иван Иванович" />
                    </Field>

                    <Field className="form-field" label="Точный адрес (город, улица, кв)" required>
                        <Input value={adressClient} onChange={(e) => setAdressClient(e.target.value)} placeholder="г. Москва, Казанский переулок 4, кв. 8" />
                    </Field>

                    <Field className="form-field" label="Адрес сдека (обязательно с городом)" required>
                        <Input value={sdecAddress} onChange={(e) => setSdecAddress(e.target.value)} placeholder="г. Москва, Беговая улица, 32" />
                    </Field>

                    <Field className="form-field" label="Номер телефона " required>
                        <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="89..." />
                    </Field>

                    <SelectRoot onValueChange={(e) => {
                        alert(e)
                        setSize(e.value[0])
                    }} required collection={clothSize} size="sm" width="320px">
                        <SelectLabel >Размер {<span style={{
                            color: '#f87171'
                        }}>*</span>}</SelectLabel>
                        <SelectTrigger>
                            <SelectValueText placeholder="Укажите размер" />
                        </SelectTrigger>
                        <SelectContent>
                            {clothSize.items.map((cloth) => {
                                return (
                                    <SelectItem item={cloth} key={cloth.value}>
                                        {cloth.label}
                                    </SelectItem>
                                )
                            })}
                        </SelectContent>
                    </SelectRoot>
                </DialogBody>
                <DialogFooter>
                    <Button onClick={onCancel} variant="outline">Закрыть</Button>
                    <Button onClick={validateAndSubmit}>Продолжить</Button>
                </DialogFooter>
                <DialogCloseTrigger onClick={onCancel} />
            </DialogContent>
        </DialogRoot>
    )
}
