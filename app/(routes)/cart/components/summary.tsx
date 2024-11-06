"use client";

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import OrderConfirmationModal from '../../../../components/OrderConfirmationModal';
import emailjs from 'emailjs-com';

const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart(state => state.items);
    const removeAll = useCart(state => state.removeAll);
    const totalPrice = items.reduce((total, item) => total + Number(item.price), 0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if(searchParams.get('success')) {
            toast.success("Payment completed.");
            removeAll();
        }
        if(searchParams.get("canceled")) {
            toast.error("Something went wrong.");
        }
    }, [searchParams, removeAll]);

    const onCheckout = () => {
        setIsModalOpen(true);
    };

    const handleCheckout = async (name: string, contactMethod: string) => {
        const itemList = items.map(item => `${item.name} ($${item.price})`).join(', ');
        const templateParams = {
            to_name: 'Blessed Tonia AgroStore',
            from_name: name,
            items: itemList,
            total_price: totalPrice,
            phone_number: phoneNumber,
            address: address,
            contact_method: contactMethod,
        };

        try {
            await emailjs.send('service_ln6z889', 'template_2rb77ls', templateParams, 'GJpgVblxSZpZKQjQf');
            toast.success("Order placed successfully.");
            removeAll();
        } catch (error) {
            console.error("Email sending error: ", error);
            toast.error("Failed to place order. Please try again.");
        }
    };

    return (
        <div className='px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
            <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
            <div className='mt-6 space-y-4'>
                <div className='flex items-center justify-between pt-4 border-t border-gray-200'>
                    <div className='text-base font-medium text-gray-400'>
                        Order Total
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button disabled={items.length === 0} className='w-full mt-6' onClick={onCheckout}>
                Continue to checkout
            </Button>
            {/* Modal for user input */}
            <OrderConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                items={items.map(item => ({ id: item.id, name: item.name, price: parseFloat(item.price) }))}
                totalPrice={totalPrice}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                address={address}
                setAddress={setAddress}
                onConfirm={handleCheckout}
                userName={userName}
                setUserName={setUserName}
            />
        </div>
    );
};

export default Summary;
