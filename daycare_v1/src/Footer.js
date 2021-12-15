import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Component } from 'react';
import { Container } from '@mui/material';
import { CssBaseline } from '@mui/material';
export default class  Footer extends Component {
  render()
  {
    return (
     <footer>
          <CssBaseline />
 <Container fixed>
 Hello world!
 </Container>
</footer>

    );
  }
}