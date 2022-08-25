import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { TextInput, MantineProvider, Textarea, Button } from '@mantine/core';
import { Icon } from '@iconify/react';
import FormTwist_infend from '../resources/svgs/FormTwist_infend.svg';


function Contact() {
  return (
    <section>
      <NavBar currentPath="contact" />
      <div style={{minHeight:'80vh'}} className='contact-container'>
        <div className='contact-form'>
          <div className='row'>
            <MantineProvider
              inherit
              theme={{
                components: {
                  InputWrapper: {
                    styles: () => ({
                      label: {
                        fontFamily: 'Raleway',
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        color: '#EDE9E0',
                      },
                    }),
                  },
                  Input: {
                    styles: (theme) => ({
                      input: {
                        backgroundColor: '#B5B2AC',
                        border: 'none',
                        '&:hover': {
                          backgroundColor: theme.fn.lighten('#B5B2AC', 0.15),
                        }
                      },
                    }),
                  },
                },
              }}
            >
              <TextInput required label='Nombre' />
              <TextInput required label='E-Mail' />
            </MantineProvider>
          </div>
          <div className='row txrerw'>
            <MantineProvider
              inherit
              theme={{
                components: {
                  InputWrapper: {
                    styles: () => ({
                      label: {
                        fontFamily: 'Raleway',
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        color: '#EDE9E0',
                      },
                    }),
                  },
                  Textarea: {
                    styles: () => ({
                      input: {
                        backgroundColor: '#B5B2AC',
                        border: 'none'
                      },
                    }),
                  },
                },
              }}
            >
              <Textarea
                label="Mensaje"
                withAsterisk
                autosize
                minRows={8}
                maxRows={10}
              />
            </MantineProvider>
          </div>
          <Button radius="md" size="lg"
            styles={(theme) => ({
              root: {
                backgroundColor: '#EDE9E0',
                width: '100%',
                border: 20,
                height: 60,
                fontSize: '1.7rem',
                fontWeight: 800,
                color: '#343134',
                '&:hover': {
                  backgroundColor: theme.fn.darken('#EDE9E0', 0.15),
                }
              }
            })}
          >
            Enviar
          </Button>
        </div>
        <div className='contact-info'>
          <div className='info-socials'>
            <h3>Seguíme!</h3>
            <Icon icon="ant-design:instagram-filled" color="#ede9e0" width={55} />
            <Icon icon="bxl:deviantart" color="#ede9e0" width={52} />
            <Icon icon="akar-icons:twitter-fill" color="#ede9e0" width={52} />
          </div>
          <br />
          <div className='info-form'>
            <h3>Contacto</h3>
            <h4>Ciudad de Buenos Aires - Argentina</h4>
            <h4>Usa el formulario para contarme sobre tu proyecto, idea u otros intereses. Serás respondido lo más pronto posible.</h4>
            <img style={{
              position: 'absolute',
              right: '4rem',
              width: '25%'
            }} src={FormTwist_infend} alt='svg' />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact