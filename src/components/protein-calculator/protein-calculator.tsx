'use client';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import styles from './protein-calculator.module.css';

const ProteinCalculator = () => {
  const [result, setResult] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    const { price, per100, weight } = data;
    const result = Number(price) / ((Number(weight) / 100) * Number(per100));
    setResult(parseFloat(result.toFixed(2)));
  };

  return (
    <div className={styles['protein-calculator']}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-body">
          <div className="form-controls">
            <label className="form-label" htmlFor="price">
              Price of the product:
            </label>

            <input
              className="form-field"
              id="price"
              type="number"
              step=".01"
              {...register('price', { required: true })}
            />

            <div className="form-error">
              {errors.price && <span>This field is required</span>}
            </div>
          </div>

          <div className="form-controls">
            <label className="form-label" htmlFor="per100">
              Protein per 100g:
            </label>

            <input
              className="form-field"
              id="per100"
              type="number"
              step=".01"
              {...register('per100', { required: true })}
            />

            <div className="form-error">
              {errors.per100 && <span>This field is required</span>}
            </div>
          </div>

          <div className="form-controls">
            <label className="form-label" htmlFor="weight">
              Weight of the product in grams:
            </label>

            <input
              className="form-field"
              id="weight"
              type="number"
              {...register('weight', { required: true })}
            />

            <div className="form-error">
              {errors.weight && <span>This field is required</span>}
            </div>
          </div>

          <div className={`${styles['form-actions']} form-actions`}>
            <button className="button" type="submit">
              Calculate
            </button>
          </div>
        </div>
      </form>

      {!!result && (
        <div className={`${styles.result} form-field`}>
          <span className="accent">1g of protein = &nbsp;</span> {result} BGN
        </div>
      )}
    </div>
  );
};

export default ProteinCalculator;
