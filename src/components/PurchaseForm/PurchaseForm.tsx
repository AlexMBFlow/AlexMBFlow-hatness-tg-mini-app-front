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
import { enqueueSnackbar } from "notistack";

interface DialogProps {
    isOpen: boolean;
    onCancel: () => void;
    onSubmit: () => void;
}

export const PurchaseForm = ({ isOpen, onCancel, onSubmit }: DialogProps) => {
    const [name, setName] = useState('')
    const [adressClient, setAdressClient] = useState('')
    const [sdecAddress, setSdecAddress] = useState('')
    const [phone, setPhone] = useState('')
    // const [size, setSize] = useState()

    const validateAndSubmit = () => {
        if (!name || !adressClient || !sdecAddress || !phone) {
            enqueueSnackbar("Некорректно заполнены некоторые поля", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                }
            })
            return
        }
        onSubmit()

        enqueueSnackbar("Благодарим вас за заказ!", {
            variant: 'success',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            }
        })
    }

    const clothSize = createListCollection({
        items: [
            { label: "M", value: "M" },
            { label: "XL", value: "XL" },
        ],
    })

    return (
        <DialogRoot onEscapeKeyDown={onCancel} closeOnEscape open={isOpen}>
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
                    <div className="">
                        <Field style={{
                            paddingTop: '1.5rem'
                        }} className="form-field" label='ФИО' required>
                            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Иванов Иван Иванович" />
                        </Field>

                        <Field className="form-field" label="Точный адрес (город, улица, кв)" required>
                            <Input value={adressClient} onChange={(e) => setAdressClient(e.target.value)} placeholder="г. Москва, Ходынский бульвар 4, квартира 8" />
                        </Field>

                        <Field className="form-field" label="Адрес сдека (обязательно с городом)" required>
                            <Input value={sdecAddress} onChange={(e) => setSdecAddress(e.target.value)} placeholder="г. Москва, Беговая улица, 32" />
                        </Field>

                        <Field className="form-field" label="Номер телефона " required>
                            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="89..." />
                        </Field>

                        <SelectRoot onValueChange={(e) => {
                            console.log(e)
                        }} required collection={clothSize} size="sm" width="320px">
                            <SelectLabel >Размер {<span style={{
                                color: 'red'
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
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button onClick={onCancel} variant="outline">Закрыть</Button>
                    <Button onClick={validateAndSubmit}>Перейти к оплате</Button>
                </DialogFooter>
                <DialogCloseTrigger onClick={onCancel} />
            </DialogContent>
        </DialogRoot>
    )
}
