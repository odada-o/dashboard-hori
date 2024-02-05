import Layout from '../../components/layout/Layout'
import { motion } from 'framer-motion'

const MarketPlace = () => {
    const boxStyle = {
        width: '200px',
        height: '200px',
        background: 'red',
        borderRadius: '50%',
    }

    return (
        <Layout title="marketplace" showTitle={true}>
            <div>마켓플레이스 컨텐츠</div>

            <motion.div
                style={boxStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 100 }}
                transition={{ ease: 'easeOut', duration: 2 }}
            />
        </Layout>
    )
}

export default MarketPlace
