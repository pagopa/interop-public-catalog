import {
  Button,
  Chip,
  ChipLabel,
  Col,
  Form,
  FormGroup,
  Icon,
  Input,
  Label,
  Row,
  Select,
} from 'design-react-kit'
import React from 'react'
import { BaseAutoComplete } from '../BaseAutoComplete/index.js'

type FiltersProps = unknown

const Filters: React.FC<FiltersProps> = (props) => {
  const [name, setName] = React.useState('')
  const [termsAndConditions, setTermsAndConditions] = React.useState(false)

  const filters = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '1',
    '2',
    '3',
    '4',
    '5',
    '1',
    '2',
    '3',
    '4',
    '5',
    '1',
    '2',
    '3',
    '4',
    '5',
  ]

  return (
    <>
      <h5 className="mb-5">Cerca nel catalogo</h5>
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Input
                label="Cerca per parola chiave"
                id="completeValidation-name"
                type="text"
                value={name}
                validationText="Validato!"
                valid={name != ''}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <BaseAutoComplete id="autocomplete" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Select id="selectExampleClassic" label="Filtra per tema" onChange={() => {}}>
                <option label="Opzione 1">Value 1</option>
                <option label="Opzione 2">Value 2</option>
                <option label="Opzione 3">Value 3</option>
                <option label="Opzione 4">Value 4</option>
                <option label="Opzione 5">Value 5</option>
              </Select>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Select
                id="selectExampleClassic"
                label="Filtra per ente fruitore"
                onChange={() => {}}
              >
                <option label="Opzione 1">Value 1</option>
                <option label="Opzione 2">Value 2</option>
                <option label="Opzione 3">Value 3</option>
                <option label="Opzione 4">Value 4</option>
                <option label="Opzione 5">Value 5</option>
              </Select>
            </FormGroup>
          </Col>
          <Col>
            <Button color="primary" type="submit" size="xs">
              Applica
            </Button>
          </Col>
        </Row>
      </Form>
      <Form>
        <Row>
          {/* <Col xs="3">
            <FormGroup>
              <Select id="selectExampleClassic" label="Field Label" onChange={() => {}}>
                <option label="Opzione 1">Value 1</option>
                <option label="Opzione 2">Value 2</option>
                <option label="Opzione 3">Value 3</option>
                <option label="Opzione 4">Value 4</option>
                <option label="Opzione 5">Value 5</option>
              </Select>
            </FormGroup>
          </Col> */}
          <Col xs="3">
            <FormGroup check>
              <Input
                id="checkbox1"
                type="checkbox"
                checked={termsAndConditions}
                onChange={() => setTermsAndConditions(!termsAndConditions)}
                valid={termsAndConditions}
              />
              <Label check for="checkbox1">
                Mostra solo Open Data
              </Label>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <div className="d-flex flex-row flex-wrap align-items-center">
        {filters.map((filter) => (
          <Chip key={filter} color="primary" className="no-hover">
            <ChipLabel className="no-hover text-primary">{filter}</ChipLabel>
            <Button>
              <Icon icon="it-close" color="primary" />
            </Button>
          </Chip>
        ))}
        <Button className="btn-link p-0">Rimuovi tutti i filtri</Button>
      </div>
    </>
  )
}

export default Filters
