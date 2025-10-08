import { Button, Form, FormGroup, Input, Label, Section } from 'design-react-kit'
import React from 'react'

const RatingSection: React.FC = () => {
  return (
    <Section color="neutral" wrapperClassName="py-5">
      <h4 className="text-white">Questa pagina ti è stata utile?</h4>
      <Form>
        <FormGroup check inline className="form-check-group">
          <Input name="gruppo1" type="radio" id="radio1" />
          <Label check htmlFor="radio1" className="text-primary bg-white">
            Sì
          </Label>
        </FormGroup>
        <FormGroup check inline className="form-check-group">
          <Input name="gruppo1" type="radio" id="radio2" />
          <Label check htmlFor="radio2" className="text-primary bg-white">
            No
          </Label>
        </FormGroup>
      </Form>
    </Section>
  )
}

export default RatingSection
