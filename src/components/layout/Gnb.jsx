import { UnorderedList, ListItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Gnb = () => {
    return (
        <UnorderedList display={{ sm: 'none', xl: 'block' }} gap={'40px'} fontSize={'16px'}>
            <ListItem>
                <Link to="/marketplace">NFT Marketplace</Link>
            </ListItem>
            <ListItem>
                <Link to="/datatables">Data Tables</Link>
            </ListItem>
            <ListItem>
                <Link to="/profile">Profile</Link>
            </ListItem>
            <ListItem>
                <Link to="/signin">Sign In</Link>
            </ListItem>
        </UnorderedList>
    )
}

export default Gnb
