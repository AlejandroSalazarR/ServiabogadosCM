import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import image_04 from '../assets/diseño gráico.png'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_68zy76h', 'template_bwh3afu', form.current, 'Vc9j4L9VzaU8dNTQi')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
        setOpen(true);

      }, (error) => {
        console.log(error.text);
      });


  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }




  return (
    <>
          <img className="" src={image_04} alt="" />

      <div name='contact' className='bg-[#1F1F1F]  bg-no-repeat bg-cover bg-fixed max-lg:p-2 p-20' >

        <div className='grid grid-cols-2 max-w-7xl mx-auto	 max-lg:grid-cols-1 px-8'>
            <div className='w-full h-screen rounded-l-3xl	shadow-md hover:shadow-lg bg-[#343a40d0] flex justify-center items-center p-4 pb-20 pt-20 px-20 max-lg:px-4  max-md:pt-4 max-md:h-min max-lg:rounded-t-3xl max-lg:rounded-bl-none' >
              <form className='flex flex-col pt-20 max-w-[600px] w-full max-lg:pt-2 ' ref={form} onSubmit={sendEmail}   >
                <div className='pb-8'>
                  <p className='text-4xl font-bold inline  text-gray-200'>Contactenos</p>
                  {/* <p className='text-[#829e7e] py-4'>Submit the form below or shoot me an email - julianmoreyra.192@gmail.com</p> */}
                </div>

                <input className="bg-[#343a40ec] block w-full flex-1 rounded-md p-3 my-3 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Nombre" type="text" name="user_name" />

                <input className="bg-[#343a40ec] block w-full flex-1 rounded-md p-3 my-3 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Email" type="email" name="user_email" />

                <input className="bg-[#343a40ec] block w-full flex-1 rounded-md p-3 my-3 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Telefono" type="text" name="user_cel" />

                <textarea className='mt-1 p-2 h-36 bg-[#343a40ec] block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' placeholder="Escriba su mensaje aquí" name="message" />
                <input className="text-white border-2 rounded-md hover:bg-gray-200 hover:border-gray-200 hover:cursor-pointer px-4 py-3 my-8 mx-auto flex items-center" type="submit" value="Enviar" variant="outlined" />
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success">
                    Su mensaje ha sido enviado con éxtito. En breve nos comunicaremos contigo.
                  </Alert>
                </Snackbar>


              </form>
            </div>
            <div className='w-full h-screen bg-[#343a40] rounded-r-md flex flex-col  items-center p-4 pt-20 px-20 max-lg:px-2  max-md:h-min max-md:pt-2 max-md:pb-8 max-lg:rounded-tr-none max-lg:rounded-b-3xl'>
              <p className='text-2xl font-bold inline text-gray-200 pt-20'>Info</p>

              <List sx={{ width: '100%', maxWidth: 360 }}>
                <ListItem  component="a" href="https://wa.me/+5491144776913" target='_blank' rel="noreferrer">
                  <ListItemAvatar >
                    <Avatar sx={{ bgcolor: '#343a40' }} >
                      <WhatsAppIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText sx={{ color: '#ddd4c3' }} primary="WhatsApp"  />
                </ListItem>
                <ListItem  component="a" href="https://www.google.com" target='_blank' rel="noreferrer">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#343a40' }}>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText sx={{ color: '#ddd4c3' }} primary="Email"  />
                </ListItem>
                <ListItem  component="a" href="https://www.instagram.com/spagnaasociados/" target='_blank' rel="noreferrer">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#343a40' }}>
                      <InstagramIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText sx={{ color: '#ddd4c3' }} primary="Instagram"  />
                </ListItem>
              </List>

            </div>
        </div>

      </div>
    </>
  );
};

export default Contact