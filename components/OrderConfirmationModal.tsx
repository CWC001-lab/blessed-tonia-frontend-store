import React, {useState} from 'react';
import Modal from '@/components/ui/modal'; // Assuming you have a Modal component
import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';

interface OrderConfirmationModalProps {
    isOpen: boolean,
    onClose: () => void,
    items: { id: string; name: string; price: number }[],
    totalPrice: number,
    phoneNumber: string,
    setPhoneNumber: (value: string) => void,
    address: string,
    setAddress: (value: string) => void,
    onConfirm: (name: string, contactMethod: string) => void,
    userName?: string,
    setUserName?: (value: (((prevState: string) => string) | string)) => void
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
                                                                           isOpen,
                                                                           onClose,
                                                                           items,
                                                                           totalPrice,
                                                                           phoneNumber,
                                                                           setPhoneNumber,
                                                                           address,
                                                                           setAddress,
                                                                           onConfirm
                                                                       }) => {
    const [userName, setUserName] = useState(''); // New state for username
    const [contactMethod, setContactMethod] = useState('call'); // New state for contact method

    const handleConfirm = () => {
        onConfirm(userName, contactMethod); // Pass username and contact method to the confirm function
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <div className='flex flex-col md:flex-row mt-4'>
                {/* Combined Text and Items Section */}
                <div className='flex-1 mr-4 mb-4 md:mb-0'>
                    <h3 className='text-md font-semibold'>Please enter your details so an agent can reach out to you
                        after your order has been confirmed.</h3>
                    <h3 className='text-md font-semibold mt-4'>Items in Cart:</h3>
                    <ul>
                        {items.map(item => (
                            <li key={item.id} className='flex justify-between'>
                                <span>{item.name}</span>
                                <span><Currency value={item.price}/></span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Form Section */}
                <div className='flex-1'>
                    <div className='mt-4'>
                        <label className='block text-gray-700'>Your Name</label>
                        <input
                            type='text'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className='border rounded w-full p-2'
                            placeholder='Your Name'
                        />
                    </div>
                    <div className='mt-4'>
                        <label className='block text-gray-700'>Phone Number</label>
                        <input
                            type='text'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className='border rounded w-full p-2'
                            placeholder='Your Phone Number'
                        />
                    </div>
                    <div className='mt-4'>
                        <label className='block text-gray-700'>Address</label>
                        <input
                            type='text'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className='border rounded w-full p-2'
                            placeholder='Your Address'
                        />
                    </div>
                    {/* Radio buttons for contact method */}
                    <div className='mt-4'>
                        <label className='block text-gray-700'>Preferred Contact Method</label>
                        <div>
                            <label>
                                <input
                                    type='radio'
                                    value='Phone call'
                                    checked={contactMethod === 'Phone call'}
                                    onChange={(e) => setContactMethod(e.target.value)}
                                />
                                Call
                            </label>
                            <label className='ml-4'>
                                <input
                                    type='radio'
                                    value='whatsapp'
                                    checked={contactMethod === 'whatsapp'}
                                    onChange={(e) => setContactMethod(e.target.value)}
                                />
                                WhatsApp
                            </label>
                        </div>
                    </div>
                    <Button className='mt-4' onClick={handleConfirm}>
                        Confirm and Checkout
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default OrderConfirmationModal;