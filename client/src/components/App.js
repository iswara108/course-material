import React from 'react'
import styled from 'styled-components'
import { Impress, Step } from 'react-impressjs'
import 'react-impressjs/styles/react-impressjs.css'

const StyledStep = styled(Step)`
  transition: font-weight 3.5s ease;
  font-weight: 500;
  &.active {
    font-weight: 700;
  }
`

export default function App() {
  return (
    <Impress
      progress={true}
      fallbackMessage={
        <p>
          Sorry, your <b>device or browser</b> couldn't support well.
        </p>
      }
    >
      <StyledStep
        id='title'
        data={{
          x: 1800,
          y: -500,
          scale: 3
        }}
      >
        Dhyāna Ślokaḥ
      </StyledStep>
      <StyledStep id={'ganesha-invocation'}>
        Gajānanaṃ bhūta gaṇādi sevitam Kapittha jambū phala sāra bhakṣitam Umā
        sutaṃ śoka vināśa kāraṇam Namāmi vighneśvara pāda paṅkajam
      </StyledStep>
      <StyledStep id={'kartikeya-invocation'} data={{ x: 1000 }}>
        Ṣaḍānanaṃ kuṅkuma rakta varṇam Mahāmatim divya mayūra vāhanam Rudrasya
        sūnuṃ surasainya nātham Guhaṃ sadā’haṃ śaraṇaṃ prapadye
      </StyledStep>
      <StyledStep id={'kartikeya-invocation'} data={{ x: 1000 }}>
        Ṣaḍānanaṃ kuṅkuma rakta varṇam Mahāmatim divya mayūra vāhanam Rudrasya
        sūnuṃ surasainya nātham Guhaṃ sadā’haṃ śaraṇaṃ prapadye
      </StyledStep>
      <StyledStep id={'saraswati-invocation'} data={{ x: 2000 }}>
        <p>
          Yā kundendu tuṣāra hāra dhavalā Yā śubhra vastrāvṛtā Yā vīṇā vara
          daṇḍa maṇḍita karā Yā śveta padmāsanā
        </p>
        <br />
        <p>
          Yā brahmācyuta śaṅkaraḥ prabhṛtibhir <br />
          Devais sadā pūjitā <br />
          Sāmāṃ pātu sarasvatī bhagavatī <br />
          Niśśeṣa jāḍyāpahā
        </p>
      </StyledStep>
      <StyledStep id={'guru-invocation'} data={{ y: 1000 }}>
        Om namaśśivāya gurave <br />
        saccidānanda mūrtaye <br />
        Niṣprapañcāya śāntāya <br />
        Śrī Śivānandāya te namaḥ <br />
        Śrī Viṣṇudevānandāya te namaḥ
      </StyledStep>
      <StyledStep id={'tripurasundari-invocation'} data={{ x: 1000, y: 1000 }}>
        Om sarva maṅgala māṅgalye <br />
        Śive sarvārtha sādhike <br />
        Śaraṇye tryaṃbike Gaurī <br />
        Nārāyaṇi namo’stu te <br />
        Nārāyaṇi namo’stu te
      </StyledStep>
      <StyledStep id={'shanti-mantra'} data={{ x: 2000, y: 1000 }}>
        <p>
          Om saha nāvavatu saha nau bhunaktu <br />
          Saha vīryaṃ karavāvahai <br />
          tejasvi nāvadhītamastu <br />
          Mā vidviṣāvahai
        </p>
        <br />
        Om śāntiś śāntiś śāntiḥ
      </StyledStep>
      <StyledStep
        id={'overview'}
        data={{
          x: 1000,
          y: 500,
          scale: 4
        }}
      />
    </Impress>
  )
}
