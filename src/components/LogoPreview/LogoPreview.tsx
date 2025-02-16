import './LogoPreview.css'
import { Button } from "@chakra-ui/react"
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog"
import { Image } from "@chakra-ui/react"

interface LogoPreviewProps {
    logoPath?: string
    onCloseLogo: () => void
}

export const LogoPreview = ({ logoPath, onCloseLogo }: LogoPreviewProps) => {
  return <DialogRoot onEscapeKeyDown={onCloseLogo} closeOnEscape open={Boolean(logoPath)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Предпросмотр</DialogTitle>
        </DialogHeader>
        <DialogBody>
        <Image rounded="md" src={logoPath} alt="Dan Abramov" />
        </DialogBody>
        <DialogFooter>
          {/* <DialogActionTrigger asChild> */}
            <Button onClick={() => onCloseLogo()} variant="outline">Закрыть</Button>
          {/* </DialogActionTrigger> */}
        </DialogFooter>
        <DialogCloseTrigger onClick={() => onCloseLogo()} />
      </DialogContent>
    </DialogRoot>
  
}
