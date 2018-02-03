pipeline {
  agent {
    node {
      label 'master'
    }

  }
  stages {
    stage('Build') {
      steps {
        script {
          if (env.BRANCH_NAME == 'master') {
            sh 'docker build -t localhost:5000/trade_frontend . && docker push localhost:5000/trade_frontend'

          } else {
            sh 'docker build -t localhost:5000/dev_trade_frontend . && docker push localhost:5000/dev_trade_frontend'

          }
        }
      }
    }
    stage('Test') {
      agent any
      steps {
        echo 'Add Test stage'
      }
    }
    stage('Deploy') {
      steps {
        script {
          if (env.BRANCH_NAME == 'master') {
            try {
              sh 'docker stop trade_frontend'
              sh 'docker rm trade_frontend'
            } catch (e) {
              echo 'container not running already'
            }
            sh 'docker run -d --name trade_frontend -p 3000:3000 localhost:5000/trade_frontend /bin/bash -c "npm run start"'

          } else {
            try {
              sh 'docker stop dev_trade_frontend'
              sh 'docker rm dev_trade_frontend'
            } catch (e) {
              echo 'container not running already'
            }
            sh 'docker run -d --name dev_trade_frontend -p 3100:3100 localhost:5000/dev_trade_frontend /bin/bash -c "npm run dev -- -p 3100"'

          }
        }
      }
    }
  }
}