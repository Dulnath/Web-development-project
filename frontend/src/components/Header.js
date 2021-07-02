import React from 'react';
import Button from './Button';
import { useHistory } from 'react-router-dom';
import background from './images/background.jpg'

//This is the first page you see when you start the program
const Header = (props) => {
    const history = useHistory();
    const ClickTeacher = () => history.push('/teachSign');
    const ClickStudent = () => history.push('/stdSign');

    const styles = {
        header: {
        
        
          backgroundImage: `url(${background})`,
          height: '100vh',
          width:'100%',
          display:'block',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }
      }

    return (
        <div style={styles.header}>
            <div style={styles.content}>

            
                <Button onClick={ClickStudent} text="Student" width="300px"  height="50px"/>
                <Button onClick={ClickTeacher} text="Teacher" width="300px" height="50px"/>
           
        </div>
            </div>
        </div>
    )
}

Header.defaultProps = {
    color:'#990099',
    fontFamily:'Arial',
    fontSize: '80px'
}
export default Header
