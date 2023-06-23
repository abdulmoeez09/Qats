import * as React from 'react';
import styles from '../styles/Cards.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
      <div className={styles.cardItems}>
        <Card sx={{ maxWidth: 320 }} className={styles.Card} style={{backgroundColor:'#d1411e'}}>
      <CardActionArea >
        <CardMedia 
          component="img"
          height="120"
          image="/img/Earthing.webp"
          alt=""
          className={styles.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{color:'white' , fontSize:'18px' , textAlign: 'center'}}>
          Earthing & Lightening Protection
          </Typography>
          <br />
          <Typography variant="p" color="text.secondary" style={{color:'black' , fontSize: '15px'}}>
          Earthing & Lightening Protection Systems is the backbone of safety of a structure / Building.Our mission is to to provide complete set of services from Estimation, Installation, Testing, Commessioning and Maintainance of Existance E & LPS systems. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 320 }} className={styles.Card} style={{backgroundColor:'#d1411e'}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="120"
          image="/img/Civil.jpg"
          alt=""
          className={styles.image}
        />
        <CardContent >
          <Typography gutterBottom variant="h6" component="div" style={{color:'white' , fontSize:'18px' , textAlign: 'center'}}>
          Civil Construction & Engineering
          </Typography>
          <br />
          <Typography variant="p" color="text.secondary" style={{color:'black' , fontSize: '15px'}}>
          Construction covers the whole range of construction, from engineering to the performance of works and their later maintenance, and also the management of public works concessions. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 320 }} className={styles.Card} style={{backgroundColor:'#d1411e'}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="120"
          image="/img/Solar.jpg"
          alt=""
          className={styles.image}
        />
        <CardContent >
          <Typography gutterBottom variant="h6" component="div" style={{color:'white' , fontSize:'18px' , textAlign: 'center'}}>
          Solar PV System Installations
          </Typography>
          <br />
          <Typography variant="p" color="text.secondary" style={{color:'black' , fontSize: '15px'}}>
          QATS is being EPC contractor having vast experiance in Designing , Procurement , Construction & Maintainance of Solar PV Plants.  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className={styles.cardItems}>
        <Card sx={{ maxWidth: 320 }} className={styles.Card} style={{backgroundColor:'#d1411e'}}>
      <CardActionArea className={styles.actionarea}>
        <CardMedia
          component="img"
          height="120"
          image="/img/Plumbing.jpg"
          alt=""
          className={styles.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{color:'white' , fontSize:'18px' , textAlign: 'center'}}>
          Electrical Mechenical & Plumbing
          </Typography>
          <br />
          <Typography variant="p" color="text.secondary" style={{color:'black' , fontSize: '15px'}}>
          QATS is one of the leading companies specialized in the field of Electro-Mechanical Contracting with a Contractor Special Category Classification. The company offers a full range of services related to all types of HVAC Systems (Heating­ Ventilation-Air-Conditioning), Refrigeration, Electrical, Low-Voltage System and Plumbing Works. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 320 }} className={styles.Card} style={{backgroundColor:'#d1411e'}}>
      <CardActionArea className={styles.actionarea}>
        <CardMedia
          component="img"
          height="120"
          image="/img/Heavy1.jpg"
          alt=""
          className={styles.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{color:'white' , fontSize:'18px' , textAlign: 'center'}}>
          Aluminium glass of Water Proofing 
          </Typography>
          <br />
          <Typography variant="p" color="text.secondary" style={{color:'black' , fontSize: '15px'}}>
          QATS is one of the leading companies specialized in the field of aluminium glass and water proofing of metal roofs. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 320 }} className={styles.Card} style={{backgroundColor:'#d1411e'}}>
      <CardActionArea className={styles.actionarea}>
        <CardMedia
          component="img"
          height="120"
          image="/img/Building.jpg"
          alt=""
          className={styles.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{color:'white' , fontSize:'18px' , textAlign: 'center'}}>
          Building Maintainance Service
          </Typography>
          <br />
          <Typography variant="p" color="text.secondary" style={{color:'black' , fontSize: '15px' }}>
          A distinctive facility services provider,uses an innovative approach in providing services in Building Management Systems, Planned Preventive Maintenance, Mechanical Electrical Plumbing and Annual Monthly Contracts for Multi story buildings, Shopping complex , Villas Schools, ware-houses & commercial Premises, enjoying reduced costs and healthier facility.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    </div>
  )
}
