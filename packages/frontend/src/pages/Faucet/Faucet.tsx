import React, { FC, ChangeEvent, SyntheticEvent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import { useFaucet } from 'src/pages/Faucet/FaucetContext'
import Button from 'src/components/buttons/Button'

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: '4.2rem'
  },
  box: {
    marginBottom: '2rem',
    flexDirection: 'column'
  },
  text: {
    display: 'block',
    marginBottom: '1rem',
    fontSize: '2rem'
  },
  button: {}
}))

const Pools: FC = () => {
  const styles = useStyles()
  let { mintToken, mintAmount, isMinting } = useFaucet()

  const handleMint = () => {
    mintToken()
  }

  const handleFaucetClick = (event: SyntheticEvent) => {
    event.preventDefault()
    window.open('https://faucet.kovan.network/', '_blank')
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" alignItems="center">
        <Typography variant="h4" className={styles.title}>
          Faucet
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" className={styles.box}>
        <Typography variant="body1" className={styles.text}>
          Mint {mintAmount} Kovan DAI
        </Typography>
        <Button
          className={styles.button}
          onClick={handleMint}
          large
          highlighted
          loading={isMinting}
        >
          Mint DAI
        </Button>
      </Box>
      <Box display="flex" alignItems="center" className={styles.box}>
        <Typography variant="body1" className={styles.text}>
          Get Kovan ETH
        </Typography>
        <Button
          className={styles.button}
          onClick={handleFaucetClick}
          large
          highlighted
        >
          Get kETH ↗
        </Button>
      </Box>
    </Box>
  )
}

export default Pools