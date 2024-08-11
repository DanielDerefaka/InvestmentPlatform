import React from 'react'

import { Card } from '../ui/card'
import { Headphones, Star, Trash } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import BreadCrumb from '../navbar/breadcrumb'

interface Props {
    
}

const Infobar = (props: Props) => {
    return (
        <div  className='mb-10'>
 <BreadCrumb/>

            {/* <div className='flex gap-3 items-center'>
                <div>
                    <Card className='rounded-xl flex gap-3 py-3 px-4 text-ghost '>
                    <Trash/>
                    <Star/>
                    </Card>
                </div>

                <Avatar>
                    <AvatarFallback className='bg-orange text-white'>
                        <Headphones/>
                    </AvatarFallback>
                </Avatar>

                <Avatar>
                   <AvatarImage
                   src="https://github.com/shadcn.png"
                   alt="shad"
                   />
                   <AvatarFallback>
                    CN
                   </AvatarFallback>
                </Avatar>

            </div> */}
            
        </div>
    )
}

export default Infobar
