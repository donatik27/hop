import { FinalityBlockTag } from '#src/chains/IChainBridge.js'
import { FinalityStrategy } from '../FinalityStrategy.js'
import { IFinalityStrategy } from '../IFinalityStrategy.js'

export class PolygonZkStrategy extends FinalityStrategy implements IFinalityStrategy {
  override getSafeBlockNumber = async (): Promise<number> => {
    const blockNumber = await this._getCustomBlockNumber(FinalityBlockTag.Safe)
    if (!blockNumber) {
      throw new Error('PolygonZkStrategy: getSafeBlockNumber: blockNumber is undefined')
    }
    return blockNumber
  }

  override getFinalizedBlockNumber = async (): Promise<number> => {
    const blockNumber = await this._getCustomBlockNumber(FinalityBlockTag.Finalized)
    if (!blockNumber) {
      throw new Error('PolygonZkStrategy: getFinalizedBlockNumber: blockNumber is undefined')
    }
    return blockNumber
  }
}
