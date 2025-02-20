'use client'
import { IconButton } from "@/components/icon-button";
import { InputField, InputRoot } from "@/components/input";
import { Copy, FileInputIcon, Link } from "lucide-react";

interface InviteLinkInputProps {
    inviteLink: string

} 

export function InviteLinkInput({inviteLink}: InviteLinkInputProps){
    function copyInviteLink(){
        navigator.clipboard.writeText(inviteLink)

    }
    return (
        <InputRoot>
                <FileInputIcon>
                    <Link className='size-5'/>
                </FileInputIcon>
                <InputField 
                readOnly 
                defaultValue= {inviteLink}
                />

                <IconButton className='-mr-2'onClick={copyInviteLink}> 
                    <Copy className="size-5"/>
                </IconButton>
                </InputRoot>
    )
}